{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function showSummary() \{\
    hideAllSectionsExcept('summary');\
\}\
\
function hideAllSectionsExcept(sectionIdToShow) \{\
    var sections = document.querySelectorAll('.content-section');\
    for (var i = 0; i < sections.length; i++) \{\
        if (sections[i].id === sectionIdToShow) \{\
            sections[i].style.display = 'block';\
        \} else \{\
            sections[i].style.display = 'none';\
        \}\
    \}\
\}}