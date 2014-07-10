setcanvasborders=true;
setcanvasborderswidth=4;


setgraphtitle="Demo of the GRAPHJS";
setgraphsubtitle="sub-title of Demo";
setyAxisLabel="Label of Y Axis";
setxAxisLabel="Label of X Axis";
setyaxisunit="Y Unit";
setfootnote="footnote pour le graph";
graphtitlesize=24;
graphsubtitlesize=18;


graphtitlesize=20;
graphsubtitlesize=16;
yaxissize=16;
xaxissize=16;
unitsize=12;
footsize=20;
setlegend=true;
setlegendFontSize=18;
setlegendBlockSize=30;
setlegendBorders=true;
setlegendBordersWidth = 1;

// 10DEC2013  13:44:50
graphdata["CPDA0132"]=["legend","data","options","labels"];
graphdata["CPDA0132"]["options"]=["graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphMin","dataFill"];
graphdata["CPDA0132"]["options"]["g"]=0;
graphdata["CPDA0132"]["options"]["d"]=false;
graphdata["CPDA0132"]["options"]["graphTitle"]="PV PROD - DAY - WLM capping";
graphdata["CPDA0132"]["options"]["graphSubTitle"]=" ";
graphdata["CPDA0132"]["options"]["yAxisLabel"]=" ";
graphdata["CPDA0132"]["options"]["xAxisLabel"]="Hour";
graphdata["CPDA0132"]["options"]["yAxisUnit"]="Pct of time";
graphdata["CPDA0132"]["options"]["footNote"]="10DEC13 13:44 - Job:G501265A";
graphdata["CPDA0132"]["data"]=["1. _24_hours","2. Batch_Period","3. Peak_Time"];
graphdata["CPDA0132"]["legend"]=["1. _24_hours","2. Batch_Period","3. Peak_Time"];
graphdata["CPDA0132"]["labels"]=["16/09","23/09","30/09","07/10","14/10","21/10","28/10","04/11","18/11","25/11","02/12","09/12"];
graphdata["CPDA0132"]["data"]["1. _24_hours"]=[0,0,0,0,0,0,0,0,0,0,0,0];
graphdata["CPDA0132"]["data"]["2. Batch_Period"]=[0,0,0,0,0,0,0,0,0,0,0,0];
graphdata["CPDA0132"]["data"]["3. Peak_Time"]=[0,0,0,0,0,0,0,0,0,0,0,0];

demovar="demoline";
graphdata[demovar]=["labels","legend","options","data"];
graphdata[demovar]["data"]=["LINE1","LINE2","LINE3","LINE4"];
//graphdata[demovar]["data"]=["LINE1"];
graphdata[demovar]["data"]["LINE1"]=[10,15,13,];
graphdata[demovar]["data"]["LINE2"]=[21,,,25];
graphdata[demovar]["data"]["LINE3"]=[33,31,37,39];
graphdata[demovar]["data"]["LINE4"]=[,31,37,39];
graphdata[demovar]["labels"]=["Lab1","Lab2","Lab3","Lab4"];
graphdata[demovar]["legend"]=["Legend ligne 1","Legend Ligne 2","Legend Ligne 3","Line 4"];
graphdata[demovar]["options"]=["yAxisRight","graphMin","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];
graphdata[demovar]["options"]["yAxisRight"]=true;
graphdata[demovar]["options"]["graphMin"]=0;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="line";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;
 
demovar="demobar";
graphdata[demovar]=["labels","legend","options","data"];
graphdata[demovar]["data"]=["LINE1","LINE2","LINE3"];
graphdata[demovar]["data"]["LINE1"]=[10,15,13,17];
graphdata[demovar]["data"]["LINE2"]=[21,23,27,25];
graphdata[demovar]["data"]["LINE3"]=[33,31,37,39];
graphdata[demovar]["labels"]=["Lab1","Lab2","Lab3","Lab4"];
graphdata[demovar]["legend"]=["Legend ligne 1","Legend Ligne 2","Legend Ligne 3"];
graphdata[demovar]["options"]=["graphMin","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];
graphdata[demovar]["options"]["graphMin"]=0;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="bar";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;

demovar="demostackedbar";
graphdata[demovar]=["labels","legend","options","data"];
graphdata[demovar]["data"]=["LINE1","LINE2","LINE3"];
graphdata[demovar]["data"]["LINE1"]=[10,15,13,17];
graphdata[demovar]["data"]["LINE2"]=[21,23,27,25];
graphdata[demovar]["data"]["LINE3"]=[33,31,37,39];
graphdata[demovar]["labels"]=["Lab1","Lab2","Lab3","Lab4"];
graphdata[demovar]["legend"]=["Legend ligne 1","Legend Ligne 2","Legend Ligne 3"];
graphdata[demovar]["options"]=["graphMin","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];
graphdata[demovar]["options"]["graphMin"]=0;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="stackedbar";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;

demovar="demohorizontalbar";
graphdata[demovar]=["labels","legend","options","data"];
graphdata[demovar]["data"]=["LINE1","LINE2","LINE3"];
graphdata[demovar]["data"]["LINE1"]=[10,15,13,17];
graphdata[demovar]["data"]["LINE2"]=[21,23,27,25];
graphdata[demovar]["data"]["LINE3"]=[33,31,37,39];
graphdata[demovar]["labels"]=["Lab1","Lab2","Lab3","Lab4"];
graphdata[demovar]["legend"]=["Legend ligne 1","Legend Ligne 2","Legend Ligne 3"];
graphdata[demovar]["options"]=["color","graphMin","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];
graphdata[demovar]["options"]["graphMin"]=0;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="horizontalbar";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;
graphdata[demovar]["options"]["color"]=["#0000FF","#8A2BE2","#A52A2A","#5F9EA0","#7FFF00","#FF7F50","#6495ED","#DC143C","#00FFFF","#008B8B","#006400","#8B008B"];

demovar="demohorizontalstackedbar";
graphdata[demovar]=["labels","legend","options","data"];
graphdata[demovar]["data"]=["LINE1","LINE2","LINE3"];
graphdata[demovar]["data"]["LINE1"]=[10,15,13,17];
graphdata[demovar]["data"]["LINE2"]=[21,23,27,25];
graphdata[demovar]["data"]["LINE3"]=[33,31,37,39];
graphdata[demovar]["labels"]=["Lab1","Lab2","Lab3","Lab4"];
//graphdata[demovar]["legend"]=["Legend ligne 1","Legend Ligne 2","Legend Ligne 3"];
graphdata[demovar]["legend"]=["Legend ligne 1"," ","Legend Ligne 3"];
graphdata[demovar]["options"]=["color","graphMin","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];
graphdata[demovar]["options"]["graphMin"]=0;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="horizontalstackedbar";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;
graphdata[demovar]["options"]["color"]=["#0000FF","WHITE","#A52A2A","#5F9EA0","#7FFF00","#FF7F50","#6495ED","#DC143C","#00FFFF","#008B8B","#006400","#8B008B"];



demovar="demoradar";
graphdata[demovar]=["labels","legend","options","data"];
graphdata[demovar]["data"]=["LINE1","LINE2","LINE3"];
graphdata[demovar]["data"]["LINE1"]=[30,15,13,17];
graphdata[demovar]["data"]["LINE2"]=[21,30,27,25];
graphdata[demovar]["data"]["LINE3"]=[13,11,37,19];
graphdata[demovar]["labels"]=["Lab1","Lab2","Lab3","Lab4"];
graphdata[demovar]["legend"]=["Legend ligne 1","Legend Ligne 2","Legend Ligne 3"];
graphdata[demovar]["options"]=["graphMin","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];
graphdata[demovar]["options"]["graphMin"]=0;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="radar";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;

demovar="demopolararea";
graphdata[demovar]=["labels","legend","options","data"];
graphdata[demovar]["data"]=["LINE1"];
graphdata[demovar]["data"]["LINE1"]=[10,15,13,17];
graphdata[demovar]["labels"]=["Lab1","Lab2","Lab3","Lab4"];
graphdata[demovar]["legend"]=["Legend ligne 1","Legend Ligne 2","Legend Ligne 3"];
graphdata[demovar]["options"]=["graphMin","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];
graphdata[demovar]["options"]["graphMin"]=0;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="polararea";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;

demovar="demopie";
graphdata[demovar]=["labels","legend","options","data"];
graphdata[demovar]["data"]=["LINE1"];
graphdata[demovar]["data"]["LINE1"]=[10,15,13,17];
graphdata[demovar]["labels"]=["Legend draw 1","Legend draw 2","Legend draw 3","Legend draw 4"];
graphdata[demovar]["legend"]=["Legend draw 1","Legend draw 2","Legend draw 3","Legend draw 4"];
graphdata[demovar]["options"]=["graphMin","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];
graphdata[demovar]["options"]["graphMin"]=0;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="pie";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
//graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
//graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
//graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;

demovar="demodoughnut";
graphdata[demovar]=["labels","legend","options","data"];
graphdata[demovar]["data"]=["LINE1"];
graphdata[demovar]["data"]["LINE1"]=[10,15,13,17];
graphdata[demovar]["labels"]=["Lab1","Lab2","Lab3","Lab4"];
graphdata[demovar]["legend"]=["Legend ligne 1","Legend Ligne 2","Legend Ligne 3"];
graphdata[demovar]["options"]=["graphMin","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];
graphdata[demovar]["options"]["graphMin"]=0;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="doughnut";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;


// window.alert(tmpl("<%=(new Date(value).getUTCHours())+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>",{ value : (1000*60*60*3)+(1000*60*17) } ));
  
demovar="demostackedbartime";
graphdata[demovar]=["labels","legend","options","data","height"];
graphdata[demovar]["data"]=["LINE1","LINE2","LINE3","LINE4","LINE5","LINE6","LINE7","LINE8","LINE9","LINE10"];
graphdata[demovar]["data"]["LINE1"]=[3*60*60*1000+0*60*1000,3*60*60*1000+35*60*1000,3*60*60*1000+14*60*1000,3*60*60*1000+25*60*1000,3*60*60*1000+17*60*1000,3*60*60*1000+35*60*1000,3*60*60*1000+14*60*1000,3*60*60*1000+25*60*1000,3*60*60*1000+17*60*1000,3*60*60*1000+35*60*1000,3*60*60*1000+14*60*1000,3*60*60*1000+25*60*1000,3*60*60*1000+17*60*1000,3*60*60*1000+35*60*1000,3*60*60*1000+14*60*1000,3*60*60*1000+25*60*1000];
graphdata[demovar]["data"]["LINE2"]=[1*60*60*1000+37*60*1000,1*60*60*1000+15*60*1000,2*60*60*1000+24*60*1000,1*60*60*1000+5*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000];
graphdata[demovar]["data"]["LINE3"]=[1*60*60*1000+07*60*1000,5*60*60*1000+05*60*1000,4*60*60*1000+40*60*1000,1*60*60*1000+15*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000];
graphdata[demovar]["data"]["LINE4"]=[1*60*60*1000+07*60*1000,1*60*60*1000+05*60*1000,1*60*60*1000+40*60*1000,1*60*60*1000+15*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000];
graphdata[demovar]["data"]["LINE5"]=[1*60*60*1000+07*60*1000,1*60*60*1000+05*60*1000,1*60*60*1000+40*60*1000,1*60*60*1000+15*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000];
graphdata[demovar]["data"]["LINE6"]=[1*60*60*1000+07*60*1000,1*60*60*1000+05*60*1000,1*60*60*1000+40*60*1000,1*60*60*1000+15*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000];
graphdata[demovar]["data"]["LINE7"]=[1*60*60*1000+07*60*1000,1*60*60*1000+05*60*1000,1*60*60*1000+40*60*1000,1*60*60*1000+15*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000];
graphdata[demovar]["data"]["LINE8"]=[1*60*60*1000+07*60*1000,1*60*60*1000+05*60*1000,1*60*60*1000+40*60*1000,1*60*60*1000+15*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000];
graphdata[demovar]["data"]["LINE9"]=[1*60*60*1000+07*60*1000,1*60*60*1000+05*60*1000,1*60*60*1000+40*60*1000,1*60*60*1000+15*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000];
graphdata[demovar]["data"]["LINE10"]=[1*60*60*1000+07*60*1000,1*60*60*1000+05*60*1000,1*60*60*1000+40*60*1000,1*60*60*1000+15*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000,1*60*60*1000+17*60*1000,1*60*60*1000+35*60*1000,1*60*60*1000+14*60*1000,1*60*60*1000+25*60*1000];
graphdata[demovar]["labels"]=["SOAPR001","SOAQL001","PRTPR001","LNXSHR01","SOAPR002","SOAQL002","PRTPR002","LNXSHR02","SOAPR003","SOAQL003","PRTPR003","LNXSHR03","SOAPR004","SOAQL004","PRTPR004","LNXSHR04"];
graphdata[demovar]["legend"]=[" ","Stop Application"," ","Stop Linux"," ","Backup on tape"," ","Start Linux"," ","Start Application"];
graphdata[demovar]["height"]=2000;


graphdata[demovar]["options"]=["height","color","scaleOverride","scaleLabel","scaleSteps","scaleStepWidth","scaleStartValue","graphMin","graphMax","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];


graphdata[demovar]["options"]["scaleOverride"]=true;
//graphdata[demovar]["options"]["scaleLabel"]="<%=(1*(24*Math.floor(value/(24*60*60*1000))+new Date(value).getUTCHours()))+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>";

graphdata[demovar]["options"]["scaleLabel"]="<%=(1*((value > 0 && value % (24*60*60*1000) ==0 ? 24 : 0 )+new Date(value).getUTCHours()))+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>";

//(value > 0 && value % (24*60*60*1000) ==0 ? 24 : 0 )
//graphdata[demovar]["options"]["scaleLabel"]="<%=(1*(24+new Date(value).getUTCHours()))+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>";
//graphdata[demovar]["options"]["scaleLabel"]="<%=(new Date(value+3*1000*60*60).getUTCHours())+':'+((new Date(value+3*1000*60*60).getMinutes()) < 10 ? ('0'+(new Date(value+3*1000*60*60).getMinutes())) : (new Date(value+3*1000*60*60).getMinutes()))%>";
//graphdata[demovar]["height"]=2000;
graphdata[demovar]["options"]["scaleSteps"]=20;
graphdata[demovar]["options"]["scaleStepWidth"]=1000*60*60*1;
graphdata[demovar]["options"]["scaleStartValue"]=3*1000*60*60;
//graphdata[demovar]["options"]["scaleStartValue"]=-3*1000*60*60;
//graphdata[demovar]["options"]["scaleStartValue"]=0;


//graphdata[demovar]["options"]["graphMin"]=2*1000*60*60;
graphdata[demovar]["options"]["graphMin"]=graphdata[demovar]["options"]["scaleStartValue"];
graphdata[demovar]["options"]["graphMax"]=24*60*60*1000;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="horizontalstackedbar";
//graphdata[demovar]["options"]["typeGraph"]="stackedbar";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;
graphdata[demovar]["options"]["color"]=["#0000FF","white","#8A2BE2","white","#A52A2A","white","#5F9EA0","white","#7FFF00","white","#FF7F50","white","#6495ED","#DC143C","#00FFFF","#008B8B","#006400","#8B008B"];


demovar="demostackedbartime2";

// 06DEC2013  15:42:50

graphdata[demovar]=["legend","data","options","labels","height"];
graphdata[demovar]["data"]=["V0","V1","V2","V3","V4","V5","V6","V7","V8","V9"];
graphdata[demovar]["legend"]=[" ","Stop Applications"," ","Stop Linux"," ","Backup on Tape"," ","Start Linux"," ","Start Applications"];
graphdata[demovar]["labels"]=["DNSQLTY","LNXSHR01","LNXSHR03","PRTDQL01","PRTDQL02","PRTFM01","PRTQL01","PRTQL02","PRTTS01","PRTTS02","RHEL64I","RH6ADMN","SOADV001","SOADV002","SOAQL001","SOAQL002","SQLDQLP1","SQLDQLP2","SQLFMP1","SQLQLI1","SQLQLP1","SQLQLP2","SQLQLX1","SQLTSI1","SQLTSP1","SQLTSP2","SQLTSX1","TOMTS01","WASQLA1","WASQLC1","WASQLI1","WASQLI2","WASQLM1","WASQLX1","WASTEST","WASTSA1","WASTSX1","WWWQLX1","WWWTSX1"];
graphdata[demovar]["data"]["V0"]=[69208000,72933000,69128000,68482000,68500000,68402000,69181000,72322000,68461000,68835000,73062000,73197000,69074000,69182000,69041000,74004000,68627000,72837000,69173000,73038000,73029000,72847000,72976000,69165000,69173000,69171000,69155000,68661000,68480000,72554000,68414000,68411000,68655000,68906000,68402000,68669000,68402000,68403000,68406000];
graphdata[demovar]["data"]["V1"]=[8000,8000,8000,59000,86000,78000,222000,213000,522000,309000,123000,8000,57000,79000,32000,0,8000,10000,9000,8000,9000,8000,13000,7000,8000,8000,9000,8000,63000,180000,68000,68000,180000,164000,86000,176000,59000,8000,7000];
graphdata[demovar]["data"]["V2"]=[3855000,13000,1000,46000,21000,0,0,0,0,0,1000,8000,1000,3556000,31000,74004000,1000,57000,3837000,1000,1000,1000,0,3822000,3612000,1000,3711000,334000,84000,31000,111000,91000,38000,1000,1000,0,83000,130000,154000];
graphdata[demovar]["data"]["V3"]=[24000,39000,36000,19000,19000,19000,19000,18000,19000,26000,10000,18000,22000,20000,23000,4000,25000,28000,18000,23000,23000,18000,29000,35000,23000,28000,28000,37000,28000,28000,33000,23000,33000,33000,28000,28000,22000,28000,23000];
graphdata[demovar]["data"]["V4"]=[6272000,6093000,9513000,6265000,7161000,0,2024000,181000,259000,4118000,13204000,6247000,7249000,5730000,7118000,12392000,3191000,4667000,4721000,5496000,5327000,4701000,6094000,4659000,4650000,8179000,6116000,5844000,767000,3020000,590000,1494000,5102000,6091000,0,4399000,24000,4681000,3149000];
graphdata[demovar]["data"]["V5"]=[503000,669000,827000,2516000,1812000,3352000,2557000,3078000,3060000,1907000,0,621000,1171000,800000,1221000,0,3031000,968000,1004000,912000,967000,990000,576000,998000,996000,1001000,757000,1519000,1723000,1875000,3760000,2867000,2237000,2563000,2928000,2644000,3148000,2537000,3106000];
graphdata[demovar]["data"]["V6"]=[1000,1000,1000,2496000,2354000,7114000,5686000,3581000,14079000,11205000,0,1000,2256000,49000,8934000,0,4917000,1261000,172000,6922000,6000,422000,0,7714000,7938000,374000,0,3373000,15255000,8712000,13424000,13446000,10155000,8642000,14955000,10484000,14662000,129000,0];
graphdata[demovar]["data"]["V7"]=[18000,23000,31000,68000,62000,22000,23000,22000,0,0,0,29000,44000,21000,0,0,27000,41000,21000,0,22000,22000,18000,0,0,27000,18000,24000,0,0,0,0,0,0,0,0,0,18000,17000];
graphdata[demovar]["data"]["V8"]=[0,0,1000,1000,0,725000,34000,303000,0,0,0,1000,1000,370000,0,0,0,1000,1000,0,1000,1000,0,0,0,1000,0,1000,0,0,0,0,0,0,0,0,0,0,0];
graphdata[demovar]["data"]["V9"]=[8000,8000,143000,58000,50000,163000,29000,28000,0,0,0,8000,69000,23000,0,0,10000,12000,9000,0,8000,8000,11000,0,0,143000,12000,9000,0,0,0,0,0,0,0,0,0,8000,8000];


//graphdata[demovar]["options"]=["graphMin","graphMax","color","scaleLabel","scaleSteps","scaleStepWidth","scaleStartValue","typeGraph","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote"];
////graphdata[demovar]["options"]=["graphMin","graphMax","color","typeGraph","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote"];

graphdata[demovar]["height"]=2000;
////graphdata[demovar]["options"]["graphTitle"]="LINUX Backup 30NOV2013";

////graphdata[demovar]["options"]["graphSubTitle"]=" ";
////graphdata[demovar]["options"]["yAxisLabel"]="Time";
////graphdata[demovar]["options"]["xAxisLabel"]="Linux";
////graphdata[demovar]["options"]["yAxisUnit"]=" ";
////graphdata[demovar]["options"]["footNote"]="06DEC13 15:42 - Job:G501265L";



////graphdata[demovar]["options"]["color"]=["#0000FF","white","#8A2BE2","white","#A52A2A","white","#5F9EA0","white","#7FFF00","white","#FF7F50","white","#6495ED","#DC143C","#00FFFF","#008B8B","#006400","#8B008B"];
//graphdata[demovar]["options"]["scaleLabel"]="<%=(1*((value > 0 && value % (24*60*60*1000) ==0 ? 24 : 0 )+new Date(value).getUTCHours()))+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>";
//graphdata[demovar]["options"]["scaleSteps"]=16;
//graphdata[demovar]["options"]["scaleStepWidth"]=1000*60*15*1;
//graphdata[demovar]["options"]["scaleStartValue"]=19*1000*60*60;

////graphdata[demovar]["options"]["typeGraph"]="horizontalstackedbar";

//graphdata[demovar]["options"]["scaleLabel"]="<%=(1*((value > 0 && value % (24*60*60*1000) ==0 ? 24 : 0 )+new Date(value).getUTCHours()))+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>";
//graphdata[demovar]["options"]["scaleSteps"]=20;
//graphdata[demovar]["options"]["scaleStepWidth"]=1000*60*60*1;
//graphdata[demovar]["options"]["scaleStartValue"]=19*1000*60*60;
//graphdata[demovar]["options"]["graphMin"]=graphdata[demovar2]["options"]["scaleStartValue"];
////graphdata[demovar]["options"]["graphMin"]=68500000;
////graphdata[demovar]["options"]["graphMax"]=78500000;


graphdata[demovar]["options"]=["height","color","scaleOverride","scaleLabel","scaleSteps","scaleStepWidth","scaleStartValue","graphMin","graphMax","typeGraph","canvasBorders","canvasBordersWidth","canvasBordersColor","graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","graphTitleFontSize","graphSubTitleFontSize","yAxisFontSize","xAxisFontSize","yAxisUnitFontSize","footNoteFontSize","legend","legendFontSize","legendBlockSize","legendBorders","legendBordersWidth"];


graphdata[demovar]["options"]["scaleOverride"]=true;
//graphdata[demovar]["options"]["scaleLabel"]="<%=(1*(24*Math.floor(value/(24*60*60*1000))+new Date(value).getUTCHours()))+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>";

graphdata[demovar]["options"]["scaleLabel"]="<%=(1*((value > 0 && value % (24*60*60*1000) ==0 ? 24 : 0 )+new Date(value).getUTCHours()))+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>";

//(value > 0 && value % (24*60*60*1000) ==0 ? 24 : 0 )
//graphdata[demovar]["options"]["scaleLabel"]="<%=(1*(24+new Date(value).getUTCHours()))+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>";
//graphdata[demovar]["options"]["scaleLabel"]="<%=(new Date(value+3*1000*60*60).getUTCHours())+':'+((new Date(value+3*1000*60*60).getMinutes()) < 10 ? ('0'+(new Date(value+3*1000*60*60).getMinutes())) : (new Date(value+3*1000*60*60).getMinutes()))%>";
//graphdata[demovar]["height"]=2000;
graphdata[demovar]["options"]["scaleSteps"]=6;
graphdata[demovar]["options"]["scaleStepWidth"]=1000*60*60*1;
graphdata[demovar]["options"]["scaleStartValue"]=19*1000*60*60;
//graphdata[demovar]["options"]["scaleStartValue"]=-3*1000*60*60;
//graphdata[demovar]["options"]["scaleStartValue"]=0;


//graphdata[demovar]["options"]["graphMin"]=2*1000*60*60;
graphdata[demovar]["options"]["graphMin"]=graphdata[demovar]["options"]["scaleStartValue"];
graphdata[demovar]["options"]["graphMax"]=24*60*60*1000;
graphdata[demovar]["options"]["canvasBorders"]=setcanvasborders;
graphdata[demovar]["options"]["canvasBordersWidth"]=setcanvasborderswidth;
graphdata[demovar]["options"]["canvasBordersColor"]="green";
graphdata[demovar]["options"]["typeGraph"]="horizontalstackedbar";
//graphdata[demovar]["options"]["typeGraph"]="stackedbar";
graphdata[demovar]["options"]["graphTitle"]=setgraphtitle;
graphdata[demovar]["options"]["graphSubTitle"]=setgraphsubtitle;
graphdata[demovar]["options"]["yAxisLabel"]=setyAxisLabel
graphdata[demovar]["options"]["xAxisLabel"]=setxAxisLabel
graphdata[demovar]["options"]["yAxisUnit"]=setyaxisunit;
graphdata[demovar]["options"]["footNote"]=setfootnote;
graphdata[demovar]["options"]["graphTitleFontSize"]=graphtitlesize;
graphdata[demovar]["options"]["graphSubTitleFontSize"]=graphsubtitlesize;
graphdata[demovar]["options"]["yAxisFontSize"]=yaxissize;
graphdata[demovar]["options"]["xAxisFontSize"]=xaxissize;
graphdata[demovar]["options"]["yAxisUnitFontSize"]=unitsize;
graphdata[demovar]["options"]["footNoteFontSize"]=footsize;
graphdata[demovar]["options"]["legend"]=setlegend;
graphdata[demovar]["options"]["legendFontSize"]=setlegendFontSize;
graphdata[demovar]["options"]["legendBlockSize"]=setlegendBlockSize;
graphdata[demovar]["options"]["legendBorders"]=setlegendBorders;
graphdata[demovar]["options"]["legendBordersWidth"]=setlegendBordersWidth;
graphdata[demovar]["options"]["color"]=["#0000FF","white","#8A2BE2","white","#A52A2A","white","#5F9EA0","white","#7FFF00","white","#FF7F50","white","#6495ED","#DC143C","#00FFFF","#008B8B","#006400","#8B008B"];

//*********************************

demovar="D131209";
// 09DEC2013  12:43:52


graphdata[demovar]=["legend","data","options","labels","height"];
graphdata[demovar]["height"]=160+40*30;
graphdata[demovar]["options"]=["graphTitle","graphSubTitle","yAxisLabel","xAxisLabel","yAxisUnit","footNote","typeGraph","color","scaleLabel","scaleOverride","scaleSteps","scaleStepWidth","scaleStartValue","annotateLabel"];
graphdata[demovar]["options"]["graphTitle"]="LINUX Backup 04JAN2014";
graphdata[demovar]["options"]["graphSubTitle"]=" ";
graphdata[demovar]["options"]["yAxisLabel"]="Linux";
graphdata[demovar]["options"]["xAxisLabel"]="Time";
graphdata[demovar]["options"]["yAxisUnit"]=" ";
graphdata[demovar]["options"]["footNote"]="07JAN14 13:30 - Job:G501265L - MACRO:&MACROMOD";
graphdata[demovar]["options"]["typeGraph"]="horizontalstackedbar";
graphdata[demovar]["options"]["color"]=["#0000FF","white","#8A2BE2","white","#A52A2A","white","#5F9EA0","white","#7FFF00","white","#FF7F50","white","#6495ED","#DC143C","#00FFFF","#008B8B",,"#006400","#8B008B"];
graphdata[demovar]["options"]["scaleLabel"]="<%=(1*((value > 0 & value % (24*60*60*1000) ==0 ? 24 : 0 )+new Date(value).getUTCHours()))+':'+((new Date(value).getMinutes()) < 10 ? ('0'+(new Date(value).getMinutes())) : (new Date(value).getMinutes()))%>";
graphdata[demovar]["options"]["scaleOverride"]=true;
graphdata[demovar]["options"]["scaleSteps"]=13;
graphdata[demovar]["options"]["scaleStepWidth"]=900000;
graphdata[demovar]["options"]["scaleStartValue"]=68400000;
graphdata[demovar]["options"]["annotateLabel"]="<%=(v1=='' ? '' : v2+'-'+v1+' - Duration:'+(new Date(v3).getUTCHours())+':'+((new Date(v3).getMinutes()) < 10 ? ('0'+(new Date(v3).getMinutes())) : (new Date(v3).getMinutes()))+':'+((new Date(v3).getSeconds()) < 10 ? ('0'+(new Date(v3).getSeconds())) : (new Date(v3).getSeconds()))+' ['+(new Date(v4-v3).getUTCHours())+':'+((new Date(v4-v3).getMinutes()) < 10 ? ('0'+(new Date(v4-v3).getMinutes())) : (new Date(v4-v3).getMinutes()))+':'+((new Date(v4-v3).getSeconds()) < 10 ? ('0'+(new Date(v4-v3).getSeconds())) : (new Date(v4-v3).getSeconds()))+'->'+(new Date(v4).getUTCHours())+':'+((new Date(v4).getMinutes()) < 10 ? ('0'+(new Date(v4).getMinutes())) : (new Date(v4).getMinutes()))+':'+((new Date(v4).getSeconds()) < 10 ? ('0'+(new Date(v4).getSeconds())) : (new Date(v4).getSeconds()))+']')%>";
graphdata[demovar]["data"]=["V0","V1","V2","V3","V4","V5","V6","V7","V8","V9"];
graphdata[demovar]["legend"]=[" ","Stop Applications"," ","Stop Linux"," ","Backup on Tape"," ","Start Linux"," ","Start Applications"];
graphdata[demovar]["labels"]=["DNSQLTY","LNXSHR01","LNXSHR03","PRTDQL01","PRTDQL02","PRTFM01","PRTQL01","PRTQL02","PRTTS01","PRTTS02","RHEL64I","RH6ADMN","RH6ADMP","SOADV001","SOADV002","SOAQL001","SOAQL002","SQLDQLP1","SQLDQLP2","SQLFMP1","SQLQLI1","SQLQLP1","SQLQLP2","SQLQLX1","SQLTSI1","SQLTSP1","SQLTSP2","SQLTSX1","TOMTS01","WASQLA1","WASQLC1","WASQLI1","WASQLI2","WASQLM1","WASQLX1","WASTEST","WASTSA1","WASTSX1","WWWQLX1","WWWTSX1"];
graphdata[demovar]["data"]["V0"]=[76827000,76439000,76203000,68491000,71184000,68402000,71438000,71676000,70661000,73096000,76832000,78130000,76854000,74070000,76278000,74613000,76552000,71496000,76366000,76735000,76827000,76805000,76450000,76541000,76800000,76210000,75927000,76356000,68551000,68402000,74028000,68472000,68402000,73736000,73914000,68402000,68556000,68403000,68483000,68474000];
graphdata[demovar]["data"]["V1"]=[7000,11000,7000,60000,55000,122000,298000,300000,607000,123000,7000,7000,8000,40000,78000,23000,164000,8000,9000,8000,9000,8000,13000,10000,8000,8000,8000,9000,59000,70000,170000,65000,70000,178000,164000,95000,175000,71000,8000,9000];
graphdata[demovar]["data"]["V2"]=[0,42000,8000,2688000,237000,1000,240000,94000,468000,179000,0,1000,2000,549000,19000,0,1000,1000,19000,0,0,1000,1000,221000,1000,33000,0,51000,6292000,138000,220000,102000,1000,285000,0,6000,1901000,63000,36000,14000];
graphdata[demovar]["data"]["V3"]=[23000,49000,33000,19000,19000,20000,18000,20000,18000,20000,25000,17000,5000,28000,19000,23000,17000,26000,21000,28000,18000,18000,28000,28000,18000,27000,24000,23000,58000,28000,28000,34000,29000,32000,33000,33000,28000,28000,29000,29000];
graphdata[demovar]["data"]["V4"]=[1545000,1800000,1814000,10000,2616000,0,0,0,0,0,457000,1000,1234000,834000,1174000,28000,1678000,0,443000,98000,423000,400000,370000,1572000,184000,30000,0,1692000,0,35000,0,59000,0,0,0,1000,599000,1000,4663000,0];
graphdata[demovar]["data"]["V5"]=[365000,621000,709000,3150000,2197000,2931000,2076000,2812000,2859000,2784000,808000,607000,745000,1756000,825000,2324000,531000,2497000,1207000,1234000,1134000,1093000,1406000,538000,1119000,1260000,1273000,508000,1845000,2511000,2380000,3338000,2935000,3089000,1816000,3791000,2139000,4523000,2302000,2105000];
graphdata[demovar]["data"]["V6"]=[1000,1000,0,4731000,2822000,7277000,5137000,4206000,5114000,3281000,1044000,67000,6000,1772000,273000,2027000,0,5042000,1024000,620000,1464000,482000,512000,1000,1795000,1854000,1456000,0,2429000,8514000,3006000,7433000,8329000,2154000,3875000,7039000,5908000,6169000,2804000,7719000];
graphdata[demovar]["data"]["V7"]=[18000,21000,36000,24000,18000,24000,26000,21000,36000,41000,34000,23000,216000,17000,22000,16000,22000,18000,18000,22000,41000,22000,27000,16000,94000,51000,27000,17000,46000,29000,42000,30000,36000,28000,29000,55000,60000,48000,17000,22000];
graphdata[demovar]["data"]["V8"]=[0,0,1000,0,1000,1000,1000,0,0,188000,0,1000,0,0,304000,0,27000,0,1000,0,1000,0,0,0,1000,0,0,1000,0,24000,0,0,0,22000,1000,0,1000,0,0,22000];
graphdata[demovar]["data"]["V9"]=[8000,8000,142000,23000,22000,163000,28000,28000,32000,39000,7000,7000,7000,0,57000,49000,45000,8000,7000,8000,8000,8000,8000,10000,7000,10000,8000,9000,34000,231000,107000,165000,223000,188000,146000,363000,399000,496000,8000,7000];
