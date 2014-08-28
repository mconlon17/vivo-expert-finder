#!/usr/bin/env/python
"""
    update_json.py -- Update the json files required by the expert finder

    Version 0.0 MC 2014-08-28
    --  Just getting started

    To do
    --  Update concept.json, used to select a concept
    --  Update author.json, used to select an author
    --  The rest might come from dynamic queries to VIVO
"""

__author__ = "Michael Conlon"
__copyright__ = "Copyright 2014, University of Florida"
__license__ = "BSD 3-Clause license"
__version__ = "0.0"


import json
from vivofoundation import vivo_sparql_query

from datetime import datetime


def update_concept_json():
    """
    Rewrite the concept_json, is any with current data from VIVO
    """
    query = """
#
# Frequency table of concepts
#
SELECT ?concept_uri (SAMPLE(DISTINCT ?clabel) AS ?label) (COUNT (DISTINCT ?uri) AS ?count)
WHERE {
  ?uri a vivo:InformationResource .
  ?uri vivo:hasSubjectArea ?concept_uri .
  ?concept_uri rdfs:label ?clabel .
}
GROUP BY ?concept_uri
ORDER BY DESC(?count)
    """
    result = vivo_sparql_query(query, debug=True)
    concept_data = result['results']['bindings']
    concept_json_file = open("concepts.json", "w")
    print >>concept_json_file, json.dumps(concept_data, indent=4)
    concept_json_file.close()
    return


print datetime.now(), "Start"
update_concept_json()
print datetime.now(), "Finish"
