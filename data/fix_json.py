#!/usr/bin/env/python
"""
    fix_json.py -- Given JSON from VIVO, fix it up for faster reading
    in the expert finder

    Version 0.1 MC 2014-08-28
    --  Works as expected for concept list

    To do
    --  Update author.json, used to select an author
    --  The rest might come from dynamic queries to VIVO
"""

__author__ = "Michael Conlon"
__copyright__ = "Copyright 2014, University of Florida"
__license__ = "BSD 3-Clause license"
__version__ = "0.1"


import json
from vivofoundation import vivo_sparql_query

from datetime import datetime


def fix_concept_json():
    """
    Rewrite the concept_json, is any with current data from VIVO
    """
    result_data = json.load(open("concepts_vivo.json","r"))['results']['bindings']
    concept_data = []
    for result_row in result_data:
        concept_row = {"uri": result_row["concept_uri"]["value"],
                       "pubs": int(result_row["pubs"]["value"]),
                       "authors": int(result_row["authors"]["value"]),
                       "label": result_row["label"]["value"]}
        concept_data.append(concept_row)
    concept_json_file = open("concepts.json", "w")
    print >>concept_json_file, json.dumps(concept_data)
    concept_json_file.close()
    return


print datetime.now(), "Start"
fix_concept_json()
print datetime.now(), "Finish"
