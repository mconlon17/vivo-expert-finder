# VIVO Expert Finder

A project to create an expert finder for VIVO based on occurrence of concepts 
in authors' works.  Here's a 
[blog post](http://mconlon17.github.io/blog/an-expert-finder-for-vivo.html) on
[Some VIVO Things](http://mconlon17.github.io/), describing aspirations 
for the work.

The project consists of:

1.  Ontology extensions to VIVO to represent nodes and edges for the expert finder.
1.  Python code to create triples that represent nodes and edges in bi-modal
graphs of concepts and authors for the expert finder
1.  An AngularJS application for fetching expert finder data, displaying, 
manipulating, navigating, and producing artifacts of an expert finding session.
1.  D3 code for displaying the current state of the expert finder graphic.

## Other components

1. CSS.  An app needs to be good looking.  Much work will be required here.
1. Test cases.  Both unit tests and end-to-end tests.  

## Notes

1. This is all rather ambitious.  D3 does a good job showing a force-directed
bi-modal graph.
1. The data elements for VIVO are well-understood, and the python code for 
creating the necessary triples is straightforward to produce.
1. AngularJS is a blur.  Lots of work needed to understand functionality, coding 
and produce compelling interactive experience.
1. D3 is complex.  Goal is to have model and controller in Angular, view in D3
with controls in Angular.
