import requests
import json

def getAstroides(c, startDate = None, endDate = None):
    nasaURL = 'https://api.nasa.gov/neo/rest/v1/feed?'
    if startDate:
        nasaURL = nasaURL + 'start_date=%s&' % startDate
    if endDate:
        nasaURL = nasaURL + 'end_date=%s&' % endDate
    nasaURL = nasaURL + 'api_key=%s' % c['nasa_api_key']
    s = requests.get(nasaURL)
    findings = []
    if s.status_code == 200:
        r = json.loads(s.text)
        for date in r['near_earth_objects']:
            for neo in r['near_earth_objects'][date]:
                tmp = {}

                try:
                    tmp['name'] = neo['name']
                except Exception as e:
                    pass
                    # raise e
                try:
                    tmp['diameter'] = (neo['estimated_diameter']['meters']['estimated_diameter_min'] + neo['estimated_diameter']['meters']['estimated_diameter_min']) / 2
                except Exception as e:
                    pass
                    # raise e
                try:
                    tmp['potentiallyHazardous'] = neo['is_potentially_hazardous_asteroid']
                except Exception as e:
                    pass
                    # raise e

                # try:
                #     tmp['debug'] = neo['close_approach_data']
                # except Exception as e:
                #     print(e)
                #     pass
                # for cpa in r['near_earth_objects'][date][neo]['close_approach_data']:
                for cpa in neo['close_approach_data']:

                    try:
                        tmp['velocity'] = (float)(cpa['relative_velocity']['kilometers_per_second'])
                    except Exception as e:
                        print(e)
                        pass
                        # raise e
                    try:
                        tmp['closeApproachTimestamp'] = cpa['epoch_date_close_approach']
                    except Exception as e:
                        print(e)
                        pass
                        # raise e
                    try:
                        tmp['closestDistance'] = int((float)(cpa['miss_distance']['kilometers']) / 1000)
                    except Exception as e:
                        print(e)
                        pass
                        # raise e
                
                findings.append(tmp)
    return findings
