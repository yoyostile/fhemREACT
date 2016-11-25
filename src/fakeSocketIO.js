const response = {
  "Arg":"",
  "Results": [
  {
    "Name":"620_Luminoodle",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "620_Luminoodle",
      "NR": "117",
      "STATE": "off",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"off", "Time":"2016-07-15 14:08:29" }    },
    "Attributes": {
      "devStateIcon": "on:ios-on-for-timer-blue off:ios-off",
      "group": "Automatisierung",
      "icon": "general_an_fuer_zeit",
      "room": "Buero",
      "webCmd": "on:off"
    }
  },
  {
    "Name":"620_Luminoodle_cmd",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([620_Luminoodle] eq \u0022on\u0022 and [6:30|[8]]) (set LuminoodleSchreibtisch on)\u000aDOELSEIF\u000a([620_Luminoodle] eq \u0022on\u0022 and [22:15|[01234]]) (set pushover1 msg 'fhem' 'Luminoodle geht um 6:20 an.')",
      "NAME": "620_Luminoodle_cmd",
      "NR": "120",
      "NTFY_ORDER": "50-620_Luminoodle_cmd",
      "STATE": "cmd_2",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"620_Luminoodle", "Time":"2016-07-15 14:08:29" },
      "cmd": { "Value":"2", "Time":"2016-06-15 22:15:00" },
      "cmd_event": { "Value":"timer_2", "Time":"2016-06-15 22:15:00" },
      "cmd_nr": { "Value":"2", "Time":"2016-06-15 22:15:00" },
      "e_620_Luminoodle_STATE": { "Value":"off", "Time":"2016-07-15 14:08:29" },
      "state": { "Value":"cmd_2", "Time":"2016-06-15 22:15:00" },
      "timer_1_c1": { "Value":"24.11.2016 06:30:00|[8]", "Time":"2016-11-23 06:30:00" },
      "timer_2_c2": { "Value":"24.11.2016 22:15:00|[01234]", "Time":"2016-11-23 22:15:00" }
    },
    "Attributes": {    }
  },
  {
    "Name":"BZ_Luftfeuchtigkeit",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "BZ_Luftfeuchtigkeit",
      "NR": "56",
      "STATE": "51.3%",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"51.3", "Time":"2016-11-23 23:42:23" }    },
    "Attributes": {
      "group": "Sensoren",
      "icon": "weather_humidity",
      "room": "Badezimmer",
      "stateFormat": "state%"
    }
  },
  {
    "Name":"BZ_RH_T",
    "PossibleSets":"reboot time",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 config:M,I mode:node,repeater version:1.4 setCommands setReading_.+ mapReadingType_.+ mapReading_.+ requestAck:1 IODev showtime:0,1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "102",
      "NAME": "BZ_RH_T",
      "NR": "52",
      "STATE": "T:24.3°C_RH:51.3%_TP:13.6°C_a:11.4 g/kg",
      "TYPE": "MYSENSORS_DEVICE",
      "ack": "0",
      "protocol": "1.5.4",
      "radioId": "102",
      "repeater": "0"
    },
    "Readings": {
      "absFeuchte": { "Value":"11.4", "Time":"2016-11-23 23:42:23" },
      "dewpoint": { "Value":"13.6", "Time":"2016-11-23 23:42:23" },
      "humidity": { "Value":"51.3", "Time":"2016-11-23 23:42:23" },
      "temperature1": { "Value":"24.3", "Time":"2016-11-23 23:34:18" }
    },
    "Attributes": {
      "IODev": "meinMSG",
      "icon": "icoKLIMA",
      "mapReading_humidity": "0 humidity",
      "mapReading_temperature1": "1 temperature",
      "mode": "node",
      "stateFormat": "T:temperature1°C_RH:humidity%_TP:dewpoint°C_a:absFeuchte g/kg",
      "version": "1.5.4"
    }
  },
  {
    "Name":"BZ_Temperatur",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "BZ_Temperatur",
      "NR": "54",
      "STATE": "24.3°C",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"24.3", "Time":"2016-11-23 23:34:18" }    },
    "Attributes": {
      "genericDeviceType": "thermometer",
      "group": "Sensoren",
      "homebridgeMapping": "CurrentTemperature=state",
      "icon": "temp_temperature",
      "room": "Badezimmer,Homekit",
      "stateFormat": "state°C"
    }
  },
  {
    "Name":"FHEM.Backup",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CHANGED": "null",
      "NAME": "FHEM.Backup",
      "NR": "41",
      "STATE": "off",
      "TYPE": "dummy"
    },
    "Readings": {
      "backup": { "Value":"161123_114000_fhem_backup.tar.gz", "Time":"2016-11-23 11:40:55" },
      "backupFiles": { "Value":"23", "Time":"2016-11-23 11:40:58" },
      "backupFilesMax": { "Value":"no limit", "Time":"2016-11-23 11:40:57" },
      "backupMB": { "Value":"29", "Time":"2016-11-23 11:40:55" },
      "info": { "Value":"backup done", "Time":"2016-11-23 11:40:56" },
      "state": { "Value":"off", "Time":"2016-11-23 11:40:54" }
    },
    "Attributes": {
      "event-on-change-reading": "state",
      "group": "FHEM",
      "room": "FHEM",
      "webCmd": "on:off"
    }
  },
  {
    "Name":"FHEM.Homebridge",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CHANGED": "null",
      "NAME": "FHEM.Homebridge",
      "NR": "37",
      "STATE": "off",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"off", "Time":"2016-10-09 16:18:54" }    },
    "Attributes": {
      "event-on-change-reading": "state",
      "room": "FHEM",
      "webCmd": "status:start:stop:restart"
    }
  },
  {
    "Name":"FHEM.Homebridge.DOIF",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([FHEM.Homebridge] eq \u0022start\u0022) (set FHEM.Homebridge on, {system (\u0022sudo /etc/init.d/homebridge start\u0022)}) \u000aDOELSEIF ([FHEM.Homebridge] eq \u0022stop\u0022) (set FHEM.Homebridge on, {system (\u0022sudo /etc/init.d/homebridge stop\u0022)}) \u000aDOELSEIF ([FHEM.Homebridge] eq \u0022restart\u0022) (set FHEM.Homebridge on, {system (\u0022sudo /etc/init.d/homebridge restart\u0022)})\u000aDOELSEIF ([FHEM.Homebridge] eq \u0022status\u0022) (set FHEM.Homebridge on, {system (\u0022sudo /etc/init.d/homebridge status\u0022)})",
      "NAME": "FHEM.Homebridge.DOIF",
      "NR": "129",
      "NTFY_ORDER": "50-FHEM.Homebridge.DOIF",
      "STATE": "initialized",
      "TYPE": "DOIF"
    },
    "Readings": {
      "cmd": { "Value":"0", "Time":"2016-06-08 23:29:35" },
      "state": { "Value":"initialized", "Time":"2016-06-08 23:29:35" }
    },
    "Attributes": {    }
  },
  {
    "Name":"FHEM.Homebridge.Status",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "FHEM.Homebridge.Status",
      "NR": "35",
      "STATE": "on",
      "TYPE": "dummy"
    },
    "Readings": {
      "info": { "Value":"Homebridge running as PID 30210", "Time":"2016-10-09 16:18:52" },
      "state": { "Value":"on", "Time":"2016-10-09 16:18:53" }
    },
    "Attributes": {      "room": "FHEM"    }
  },
  {
    "Name":"FHEMBackup",
    "PossibleSets":"active execNow inactive modifyTimeSpec",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 disabledForIntervals skip_next:0,1 alignTime computeAfterInit cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "COMMAND": "set FHEM.Backup on",
      "DEF": "*11:40:00 set FHEM.Backup on",
      "NAME": "FHEMBackup",
      "NR": "45",
      "PERIODIC": "yes",
      "RELATIVE": "no",
      "REP": "-1",
      "STATE": "Next: 11:40:00",
      "TIMESPEC": "11:40:00",
      "TRIGGERTIME": "1479984000",
      "TRIGGERTIME_FMT": "2016-11-24 11:40:00",
      "TYPE": "at"
    },
    "Readings": {      "state": { "Value":"Next: 11:40:00", "Time":"2016-11-23 11:40:00" }    },
    "Attributes": {
      "group": "FHEM",
      "room": "FHEM"
    }
  },
  {
    "Name":"FHEMBackupOn",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 disabledForIntervals forwardReturnValue:1,0 readLog:1,0 showtime:1,0 addStateEvent:1,0 cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "FHEM.Backup:on {system (\u0022sudo -u root /opt/fhem/FHEM/backup.sh &\u0022)}",
      "NAME": "FHEMBackupOn",
      "NOTIFYDEV": "FHEM.Backup",
      "NR": "42",
      "NTFY_ORDER": "50-FHEMBackupOn",
      "REGEXP": "FHEM.Backup:on",
      "STATE": "2016-11-23 11:40:00",
      "TYPE": "notify"
    },
    "Readings": {      "state": { "Value":"active", "Time":"2016-10-09 15:58:07" }    },
    "Attributes": {    }
  },
  {
    "Name":"FileLog_BZ_Klima",
    "PossibleSets":"absorb:FileLog_SZ_Klima,FileLog_WZ_Klima,Logfile addRegexpPart removeRegexpPart reopen",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 addStateEvent:0,1 archiveCompress archivecmd archivedir createGluedFile:0,1 disable:0,1 disabledForIntervals eventOnThreshold logtype mseclog:1,0 nrarchive reformatFn cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "./log/BZ_Klima-%Y-%m-%d.log BZ_Luftfeuchtigkeit:.*|BZ_Temperatur",
      "NAME": "FileLog_BZ_Klima",
      "NR": "112",
      "NTFY_ORDER": "50-FileLog_BZ_Klima",
      "REGEXP": "BZ_Luftfeuchtigkeit:.*|BZ_Temperatur",
      "STATE": "active",
      "TYPE": "FileLog",
      "currentlogfile": "./log/BZ_Klima-2016-11-23.log",
      "logfile": "./log/BZ_Klima-%Y-%m-%d.log"
    },
    "Readings": {      "linesInTheFile": { "Value":"1524", "Time":"2016-11-23 23:42:23" }    },
    "Attributes": {    }
  },
  {
    "Name":"FileLog_SZ_Klima",
    "PossibleSets":"absorb:FileLog_BZ_Klima,FileLog_WZ_Klima,Logfile addRegexpPart removeRegexpPart reopen",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 addStateEvent:0,1 archiveCompress archivecmd archivedir createGluedFile:0,1 disable:0,1 disabledForIntervals eventOnThreshold logtype mseclog:1,0 nrarchive reformatFn cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "./log/SZ_Klima-%Y-%m-%d.log SZ_Luftfeuchtigkeit:.*|SZ_Temperatur",
      "NAME": "FileLog_SZ_Klima",
      "NR": "109",
      "NTFY_ORDER": "50-FileLog_SZ_Klima",
      "REGEXP": "SZ_Luftfeuchtigkeit:.*|SZ_Temperatur",
      "STATE": "active",
      "TYPE": "FileLog",
      "currentlogfile": "./log/SZ_Klima-2016-11-23.log",
      "logfile": "./log/SZ_Klima-%Y-%m-%d.log"
    },
    "Readings": {      "linesInTheFile": { "Value":"846", "Time":"2016-11-23 23:52:05" }    },
    "Attributes": {    }
  },
  {
    "Name":"FileLog_WZ_Klima",
    "PossibleSets":"absorb:FileLog_BZ_Klima,FileLog_SZ_Klima,Logfile addRegexpPart removeRegexpPart reopen",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 addStateEvent:0,1 archiveCompress archivecmd archivedir createGluedFile:0,1 disable:0,1 disabledForIntervals eventOnThreshold logtype mseclog:1,0 nrarchive reformatFn cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "./log/WZ_Klima-%Y-%m-%d.log WZ_Luftfeuchtigkeit:.*|WZ_Temperatur",
      "NAME": "FileLog_WZ_Klima",
      "NR": "106",
      "NTFY_ORDER": "50-FileLog_WZ_Klima",
      "REGEXP": "WZ_Luftfeuchtigkeit:.*|WZ_Temperatur",
      "STATE": "active",
      "TYPE": "FileLog",
      "currentlogfile": "./log/WZ_Klima-2016-11-23.log",
      "logfile": "./log/WZ_Klima-%Y-%m-%d.log"
    },
    "Readings": {      "linesInTheFile": { "Value":"1276", "Time":"2016-11-23 23:50:43" }    },
    "Attributes": {    }
  },
  {
    "Name":"HarmonyHub",
    "PossibleSets":" activity:Fernsehen,Musik.hören,Chromecast,Fire.TV.sehen,Xbox,PowerOff autocreate:Roku.3,Amazon.Fire.TV-Stick,Google.Chromecast, command getConfig:noArg getCurrentActivity:noArg off:noArg reconnect:noArg sleeptimer sync:noArg text cursor:up,down,left,right,pageUp,pageDown,home,end special:previousTrack,nextTrack,stop,playPause,volumeUp,volumeDown,mute update:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1 nossl:1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CONNECTS": "69",
      "ConnectionState": "LoggedIn",
      "DEF": "192.168.192.47",
      "FD": "13",
      "LAST_CONNECT": "2016-11-23 13:40:42",
      "LAST_DISCONNECT": "2016-11-23 13:40:40",
      "NAME": "HarmonyHub",
      "NOTIFYDEV": "global",
      "NR": "130",
      "NTFY_ORDER": "50-HarmonyHub",
      "STATE": "Connected",
      "TYPE": "harmony",
      "activityStatus": "0",
      "currentActivityID": "-1",
      "hubSwVersion": "4.11.6",
      "hubUpdate": "1",
      "ip": "192.168.192.47",
      "previousActivityID": "20855006",
      "syncStatus": "0"
    },
    "Readings": {
      "activity": { "Value":"PowerOff", "Time":"2016-11-23 16:49:44" },
      "currentActivity": { "Value":"PowerOff", "Time":"2016-11-23 16:49:44" },
      "previousActivity": { "Value":"Fernsehen", "Time":"2016-11-23 16:49:44" },
      "state": { "Value":"Connected", "Time":"2016-11-23 13:40:42" }
    },
    "Attributes": {      "room": "Wohnzimmer,harmony"    }
  },
  {
    "Name":"HomeStatus",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "HomeStatus",
      "NR": "128",
      "STATE": "1",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"1", "Time":"2016-06-07 20:58:14" }    },
    "Attributes": {      "webCmd": "1:2:3:4"    }
  },
  {
    "Name":"LEDLeisteKueche",
    "PossibleSets":"on off dim dimup dimdown HSV RGB",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 gamma dimStep defaultColor defaultRamp colorCast whitePoint event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CONNECTION": "LD382A",
      "DEF": "RGBW LD382A:192.168.192.14",
      "IP": "192.168.192.14",
      "LEDTYPE": "RGBW",
      "NAME": "LEDLeisteKueche",
      "NR": "30",
      "NTFY_ORDER": "50-LEDLeisteKueche",
      "PORT": "5577",
      "PROTO": "1",
      "SLOT": "0",
      "STATE": "off",
      "TYPE": "WifiLight"
    },
    "Readings": {
      "RGB": { "Value":"000000", "Time":"2016-11-20 22:43:31" },
      "brightness": { "Value":"0", "Time":"2016-11-20 22:43:31" },
      "hue": { "Value":"0", "Time":"2016-11-20 22:43:31" },
      "saturation": { "Value":"0", "Time":"2016-11-20 22:43:31" },
      "state": { "Value":"off", "Time":"2016-11-20 22:43:31" }
    },
    "Attributes": {
      "colorCast": "0, -20, -20, -25, 0, -10",
      "dimStep": "20",
      "genericDeviceType": "switch",
      "group": "Licht",
      "icon": "light_led",
      "room": "Homekit,Kueche",
      "whitePoint": "1, 1, 1"
    }
  },
  {
    "Name":"Logfile",
    "PossibleSets":"absorb:FileLog_BZ_Klima,FileLog_SZ_Klima,FileLog_WZ_Klima addRegexpPart removeRegexpPart reopen",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 addStateEvent:0,1 archiveCompress archivecmd archivedir createGluedFile:0,1 disable:0,1 disabledForIntervals eventOnThreshold logtype mseclog:1,0 nrarchive reformatFn cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "./log/fhem-%Y-%m.log fakelog",
      "NAME": "Logfile",
      "NR": "12",
      "NTFY_ORDER": "50-Logfile",
      "REGEXP": "fakelog",
      "STATE": "active",
      "TYPE": "FileLog",
      "currentlogfile": "./log/fhem-2016-11.log",
      "logfile": "./log/fhem-%Y-%m.log"
    },
    "Readings": {      "linesInTheFile": { "Value":"0", "Time":"2016-11-01 00:00:01" }    },
    "Attributes": {    }
  },
  {
    "Name":"LuminoodleSchreibtisch",
    "PossibleSets":"on off",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "LuminoodleSchreibtisch",
      "NR": "20",
      "STATE": "on",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"on", "Time":"2016-11-23 21:44:48" }    },
    "Attributes": {
      "genericDeviceType": "switch",
      "group": "Licht",
      "homebridgeMapping": "cmdOn=on,cmdOff=off",
      "icon": "light_led_stripe",
      "room": "Homekit,Buero",
      "setList": "on off",
      "stateFormat": "state",
      "webCmd": "on:off"
    }
  },
  {
    "Name":"Rolladen_Automatik",
    "PossibleSets":"on off",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "Rolladen_Automatik",
      "NR": "93",
      "STATE": "on",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"on", "Time":"2016-11-15 21:34:15" }    },
    "Attributes": {
      "devStateIcon": "on:ios-on-for-timer-blue off:ios-off",
      "genericDeviceType": "switch",
      "group": "Automatisierung",
      "homebridgeMapping": "cmdOn=on,cmdOff=off",
      "icon": "fts_shutter_automatic",
      "room": "Homekit,Wohnzimmer",
      "setList": "on off",
      "webCmd": "on:off"
    }
  },
  {
    "Name":"Rolladen_Automatik_cmd",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([Rolladen_Automatik] eq \u0022on\u0022 and ([09:00|7]) or [{sunrise(\u0022CIVIL\u0022,0,\u002206:20\u0022,\u002208:00\u0022)}|8]) \u000a(set WZ_Rollo open)",
      "NAME": "Rolladen_Automatik_cmd",
      "NR": "94",
      "NTFY_ORDER": "50-Rolladen_Automatik_cmd",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"Rolladen_Automatik", "Time":"2016-11-15 21:34:15" },
      "cmd": { "Value":"1", "Time":"2016-11-23 07:27:52" },
      "cmd_event": { "Value":"timer_2", "Time":"2016-11-23 07:27:52" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-23 07:27:52" },
      "e_Rolladen_Automatik_STATE": { "Value":"on", "Time":"2016-11-15 21:34:15" },
      "state": { "Value":"cmd_1", "Time":"2016-11-23 07:27:52" },
      "timer_1_c1": { "Value":"24.11.2016 09:00:00|7", "Time":"2016-11-23 09:00:00" },
      "timer_2_c1": { "Value":"24.11.2016 07:29:16|8", "Time":"2016-11-23 07:27:52" }
    },
    "Attributes": {      "do": "always"    }
  },
  {
    "Name":"SVG_FileLog_BZ_Klima_1",
    "PossibleSets":"copyGplotFile:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 captionLeft:1,0\u0022 endPlotNow endPlotToday fixedoffset fixedrange label nrAxis plotWeekStartDay:0,1,2,3,4,5,6 plotfunction plotsize startDate title cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "FileLog_BZ_Klima:SVG_FileLog_BZ_Klima_1:CURRENT",
      "GPLOTFILE": "SVG_FileLog_BZ_Klima_1",
      "LOGDEVICE": "FileLog_BZ_Klima",
      "LOGFILE": "CURRENT",
      "NAME": "SVG_FileLog_BZ_Klima_1",
      "NR": "113",
      "STATE": "initialized",
      "TYPE": "SVG"
    },
    "Readings": {    },
    "Attributes": {      "room": "Badezimmer"    }
  },
  {
    "Name":"SVG_FileLog_SZ_Klima_1",
    "PossibleSets":"copyGplotFile:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 captionLeft:1,0\u0022 endPlotNow endPlotToday fixedoffset fixedrange label nrAxis plotWeekStartDay:0,1,2,3,4,5,6 plotfunction plotsize startDate title cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "FileLog_SZ_Klima:SVG_FileLog_SZ_Klima_1:CURRENT",
      "GPLOTFILE": "SVG_FileLog_SZ_Klima_1",
      "LOGDEVICE": "FileLog_SZ_Klima",
      "LOGFILE": "CURRENT",
      "NAME": "SVG_FileLog_SZ_Klima_1",
      "NR": "110",
      "STATE": "initialized",
      "TYPE": "SVG"
    },
    "Readings": {    },
    "Attributes": {      "room": "Schlafzimmer"    }
  },
  {
    "Name":"SVG_FileLog_WZ_Klima_1",
    "PossibleSets":"copyGplotFile:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 captionLeft:1,0\u0022 endPlotNow endPlotToday fixedoffset fixedrange label nrAxis plotWeekStartDay:0,1,2,3,4,5,6 plotfunction plotsize startDate title cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "FileLog_WZ_Klima:SVG_FileLog_WZ_Klima_1:CURRENT",
      "GPLOTFILE": "SVG_FileLog_WZ_Klima_1",
      "LOGDEVICE": "FileLog_WZ_Klima",
      "LOGFILE": "CURRENT",
      "NAME": "SVG_FileLog_WZ_Klima_1",
      "NR": "107",
      "STATE": "initialized",
      "TYPE": "SVG"
    },
    "Readings": {    },
    "Attributes": {      "room": "Wohnzimmer"    }
  },
  {
    "Name":"SZ_Luftfeuchtigkeit",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "SZ_Luftfeuchtigkeit",
      "NR": "74",
      "STATE": "44.6%",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"44.6", "Time":"2016-11-23 23:52:05" }    },
    "Attributes": {
      "group": "Sensoren",
      "icon": "weather_humidity",
      "room": "Schlafzimmer",
      "stateFormat": "state%"
    }
  },
  {
    "Name":"SZ_RH_T",
    "PossibleSets":"reboot time",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 config:M,I mode:node,repeater version:1.4 setCommands setReading_.+ mapReadingType_.+ mapReading_.+ requestAck:1 IODev showtime:0,1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "100",
      "NAME": "SZ_RH_T",
      "NR": "70",
      "STATE": "T:22.9°C_RH:44.6%_TP:10.2°C_a:9.1 g/kg",
      "TYPE": "MYSENSORS_DEVICE",
      "ack": "0",
      "protocol": "1.5.4",
      "radioId": "100",
      "repeater": "0"
    },
    "Readings": {
      "SKETCH_NAME": { "Value":"Humidity", "Time":"2016-09-11 15:59:20" },
      "SKETCH_VERSION": { "Value":"1.0", "Time":"2016-09-11 15:59:20" },
      "absFeuchte": { "Value":"9.1", "Time":"2016-11-23 23:52:05" },
      "dewpoint": { "Value":"10.2", "Time":"2016-11-23 23:52:05" },
      "humidity": { "Value":"44.6", "Time":"2016-11-23 23:52:05" },
      "parentId": { "Value":"0", "Time":"2016-09-11 15:59:18" },
      "temperature1": { "Value":"22.9", "Time":"2016-11-23 23:52:05" }
    },
    "Attributes": {
      "IODev": "meinMSG",
      "icon": "icoKLIMA",
      "mapReading_humidity": "0 humidity",
      "mapReading_temperature1": "1 temperature",
      "mode": "node",
      "stateFormat": "T:temperature1°C_RH:humidity%_TP:dewpoint°C_a:absFeuchte g/kg",
      "version": "1.5.4"
    }
  },
  {
    "Name":"SZ_Temperatur",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "SZ_Temperatur",
      "NR": "72",
      "STATE": "22.9°C",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"22.9", "Time":"2016-11-23 23:52:05" }    },
    "Attributes": {
      "genericDeviceType": "thermometer",
      "group": "Sensoren",
      "homebridgeMapping": "CurrentTemperature=state",
      "icon": "temp_temperature",
      "room": "Homekit,Schlafzimmer",
      "stateFormat": "state°C"
    }
  },
  {
    "Name":"StehlampeWZ",
    "PossibleSets":"on off",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "StehlampeWZ",
      "NR": "25",
      "STATE": "off",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"off", "Time":"2016-11-14 17:30:57" }    },
    "Attributes": {
      "genericDeviceType": "switch",
      "group": "Licht",
      "homebridgeMapping": "cmdOn=on,cmdOff=off",
      "icon": "FS20.on",
      "room": "Homekit,Wohnzimmer",
      "setList": "on off",
      "stateFormat": "state",
      "webCmd": "on:off"
    }
  },
  {
    "Name":"TABLETUI",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 directoryindex readings cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "ftui/ ./www/tablet Tablet-UI",
      "NAME": "TABLETUI",
      "NR": "127",
      "STATE": "TABLETUI",
      "TYPE": "HTTPSRV"
    },
    "Readings": {    },
    "Attributes": {    }
  },
  {
    "Name":"UpdateBZHum",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([BZ_RH_T:humidity]) (set BZ_Luftfeuchtigkeit [BZ_RH_T:humidity])",
      "NAME": "UpdateBZHum",
      "NR": "59",
      "NTFY_ORDER": "50-UpdateBZHum",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"BZ_RH_T", "Time":"2016-11-23 23:42:23" },
      "cmd": { "Value":"1", "Time":"2016-11-23 23:42:23" },
      "cmd_event": { "Value":"BZ_RH_T", "Time":"2016-11-23 23:42:23" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-23 23:42:23" },
      "e_BZ_RH_T_humidity": { "Value":"51.3", "Time":"2016-11-23 23:42:23" },
      "state": { "Value":"cmd_1", "Time":"2016-11-23 23:42:23" }
    },
    "Attributes": {
      "checkReadingEvent": "1",
      "do": "always"
    }
  },
  {
    "Name":"UpdateBZTemp",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([BZ_RH_T:temperature1]) (set BZ_Temperatur [BZ_RH_T:temperature1])",
      "NAME": "UpdateBZTemp",
      "NR": "58",
      "NTFY_ORDER": "50-UpdateBZTemp",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"BZ_RH_T", "Time":"2016-11-23 23:42:23" },
      "cmd": { "Value":"1", "Time":"2016-11-23 23:34:18" },
      "cmd_event": { "Value":"BZ_RH_T", "Time":"2016-11-23 23:34:18" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-23 23:34:18" },
      "e_BZ_RH_T_temperature1": { "Value":"24.3", "Time":"2016-11-23 23:34:18" },
      "state": { "Value":"cmd_1", "Time":"2016-11-23 23:34:18" }
    },
    "Attributes": {
      "checkReadingEvent": "1",
      "do": "always"
    }
  },
  {
    "Name":"UpdateSZHum",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([SZ_RH_T:humidity]) (set SZ_Luftfeuchtigkeit [SZ_RH_T:humidity])",
      "NAME": "UpdateSZHum",
      "NR": "77",
      "NTFY_ORDER": "50-UpdateSZHum",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"SZ_RH_T", "Time":"2016-11-23 23:52:05" },
      "cmd": { "Value":"1", "Time":"2016-11-23 23:52:06" },
      "cmd_event": { "Value":"SZ_RH_T", "Time":"2016-11-23 23:52:06" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-23 23:52:06" },
      "e_SZ_RH_T_humidity": { "Value":"44.6", "Time":"2016-11-23 23:52:05" },
      "state": { "Value":"cmd_1", "Time":"2016-11-23 23:52:06" }
    },
    "Attributes": {
      "checkReadingEvent": "1",
      "do": "always"
    }
  },
  {
    "Name":"UpdateSZTemp",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([SZ_RH_T:temperature1]) (set SZ_Temperatur [SZ_RH_T:temperature1])",
      "NAME": "UpdateSZTemp",
      "NR": "76",
      "NTFY_ORDER": "50-UpdateSZTemp",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"SZ_RH_T", "Time":"2016-11-23 23:52:06" },
      "cmd": { "Value":"1", "Time":"2016-11-23 23:52:05" },
      "cmd_event": { "Value":"SZ_RH_T", "Time":"2016-11-23 23:52:05" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-23 23:52:05" },
      "e_SZ_RH_T_temperature1": { "Value":"22.9", "Time":"2016-11-23 23:52:05" },
      "state": { "Value":"cmd_1", "Time":"2016-11-23 23:52:05" }
    },
    "Attributes": {
      "checkReadingEvent": "1",
      "do": "always"
    }
  },
  {
    "Name":"UpdateWZHum",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([WZ_RH_T:humidity]) (set WZ_Luftfeuchtigkeit [WZ_RH_T:humidity])",
      "NAME": "UpdateWZHum",
      "NR": "68",
      "NTFY_ORDER": "50-UpdateWZHum",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"WZ_RH_T", "Time":"2016-11-23 23:50:43" },
      "cmd": { "Value":"1", "Time":"2016-11-23 23:50:43" },
      "cmd_event": { "Value":"WZ_RH_T", "Time":"2016-11-23 23:50:43" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-23 23:50:43" },
      "e_WZ_RH_T_humidity": { "Value":"46.8", "Time":"2016-11-23 23:50:43" },
      "state": { "Value":"cmd_1", "Time":"2016-11-23 23:50:43" }
    },
    "Attributes": {
      "checkReadingEvent": "1",
      "do": "always"
    }
  },
  {
    "Name":"UpdateWZTemp",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([WZ_RH_T:temperature1]) (set WZ_Temperatur [WZ_RH_T:temperature1])",
      "NAME": "UpdateWZTemp",
      "NR": "67",
      "NTFY_ORDER": "50-UpdateWZTemp",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"WZ_RH_T", "Time":"2016-11-23 23:50:43" },
      "cmd": { "Value":"1", "Time":"2016-11-23 23:50:11" },
      "cmd_event": { "Value":"WZ_RH_T", "Time":"2016-11-23 23:50:11" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-23 23:50:11" },
      "e_WZ_RH_T_temperature1": { "Value":"23.8", "Time":"2016-11-23 23:50:11" },
      "state": { "Value":"cmd_1", "Time":"2016-11-23 23:50:11" }
    },
    "Attributes": {
      "checkReadingEvent": "1",
      "do": "always"
    }
  },
  {
    "Name":"WEB",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CONNECTS": "714",
      "DEF": "8083 global",
      "FD": "6",
      "NAME": "WEB",
      "NR": "5",
      "NTFY_ORDER": "50-WEB",
      "PORT": "8083",
      "STATE": "Initialized",
      "TYPE": "FHEMWEB"
    },
    "Readings": {    },
    "Attributes": {
      "editConfig": "1",
      "sortRooms": "Schlafzimmer Buero Kueche Wohnzimmer",
      "stylesheetPrefix": "dark"
    }
  },
  {
    "Name":"WEB_127.0.0.1_42544",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "Authenticated": "0",
      "BUF": "",
      "FD": "17",
      "LASTACCESS": "1476022734",
      "NAME": "WEB_127.0.0.1_42544",
      "NR": "314",
      "NTFY_ORDER": "WEB_127.0.0.1_42544",
      "PEER": "127.0.0.1",
      "PORT": "42544",
      "SNAME": "WEB",
      "SSL": "null",
      "STATE": "Connected",
      "TEMPORARY": "1",
      "TYPE": "FHEMWEB",
      "WBCallback": "null"
    },
    "Readings": {    },
    "Attributes": {      "room": "hidden"    }
  },
  {
    "Name":"WEB_192.168.192.68_51699",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "Authenticated": "0",
      "BUF": "",
      "FD": "21",
      "FW_ID": "73313",
      "LASTACCESS": "1479939094",
      "NAME": "WEB_192.168.192.68_51699",
      "NR": "73316",
      "NTFY_ORDER": "WEB_192.168.192.68_51699",
      "PEER": "192.168.192.68",
      "PORT": "51699",
      "SNAME": "WEB",
      "SSL": "null",
      "STATE": "Connected",
      "TEMPORARY": "1",
      "TYPE": "FHEMWEB",
      "WBCallback": "null",
      "canAsyncOutput": "1"
    },
    "Readings": {    },
    "Attributes": {      "room": "hidden"    }
  },
  {
    "Name":"WEB_192.168.192.68_53409",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "Authenticated": "0",
      "BUF": "",
      "FD": "18",
      "LASTACCESS": "1479941551",
      "NAME": "WEB_192.168.192.68_53409",
      "NR": "73387",
      "PEER": "192.168.192.68",
      "PORT": "53409",
      "SNAME": "WEB",
      "SSL": "null",
      "STATE": "Connected",
      "TEMPORARY": "1",
      "TYPE": "FHEMWEB"
    },
    "Readings": {    },
    "Attributes": {      "room": "hidden"    }
  },
  {
    "Name":"WEB_192.168.192.68_53410",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "BUF": "",
      "FD": "19",
      "NAME": "WEB_192.168.192.68_53410",
      "NR": "73388",
      "PEER": "192.168.192.68",
      "PORT": "53410",
      "SNAME": "WEB",
      "SSL": "null",
      "STATE": "Connected",
      "TEMPORARY": "1",
      "TYPE": "FHEMWEB"
    },
    "Readings": {    },
    "Attributes": {      "room": "hidden"    }
  },
  {
    "Name":"WEB_192.168.192.68_53411",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "BUF": "",
      "FD": "20",
      "NAME": "WEB_192.168.192.68_53411",
      "NR": "73389",
      "PEER": "192.168.192.68",
      "PORT": "53411",
      "SNAME": "WEB",
      "SSL": "null",
      "STATE": "Connected",
      "TEMPORARY": "1",
      "TYPE": "FHEMWEB"
    },
    "Readings": {    },
    "Attributes": {      "room": "hidden"    }
  },
  {
    "Name":"WEB_192.168.192.68_53412",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "BUF": "",
      "FD": "22",
      "NAME": "WEB_192.168.192.68_53412",
      "NR": "73390",
      "PEER": "192.168.192.68",
      "PORT": "53412",
      "SNAME": "WEB",
      "SSL": "null",
      "STATE": "Connected",
      "TEMPORARY": "1",
      "TYPE": "FHEMWEB"
    },
    "Readings": {    },
    "Attributes": {      "room": "hidden"    }
  },
  {
    "Name":"WEB_192.168.192.68_53413",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "BUF": "",
      "FD": "23",
      "NAME": "WEB_192.168.192.68_53413",
      "NR": "73391",
      "PEER": "192.168.192.68",
      "PORT": "53413",
      "SNAME": "WEB",
      "SSL": "null",
      "STATE": "Connected",
      "TEMPORARY": "1",
      "TYPE": "FHEMWEB"
    },
    "Readings": {    },
    "Attributes": {      "room": "hidden"    }
  },
  {
    "Name":"WEBphone",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CONNECTS": "1206",
      "DEF": "8084 global",
      "FD": "7",
      "NAME": "WEBphone",
      "NR": "7",
      "NTFY_ORDER": "50-WEBphone",
      "PORT": "8084",
      "STATE": "Initialized",
      "TYPE": "FHEMWEB"
    },
    "Readings": {    },
    "Attributes": {      "stylesheetPrefix": "ios7touchpad"    }
  },
  {
    "Name":"WEBtablet",
    "PossibleSets":"clearSvgCache:noArg rereadicons:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 CORS:0,1 HTTPS:1,0 CssFiles JavaScripts SVGcache:1,0 addStateEvent csrfToken alarmTimeout allowedCommands allowfrom basicAuth basicAuthMsg closeConn:1,0 column confirmDelete defaultRoom deviceOverview:always,iconOnly,onClick,never editConfig:1,0 editFileList:textField-long endPlotNow:1,0 endPlotToday:1,0 fwcompress:0,1 hiddengroup hiddenroom iconPath longpoll:0,1 longpollSVG:1,0 menuEntries nameDisplay ploteditor:always,onClick,never plotfork:1,0 plotmode:gnuplot-scroll,gnuplot-scroll-svg,SVG plotEmbed:0,1 plotsize plotWeekStartDay:0,1,2,3,4,5,6 nrAxis redirectCmds:0,1 refresh reverseLogs:0,1 roomIcons sortRooms showUsedFiles:0,1 sslVersion smallscreen:unused smallscreenCommands:0,1 stylesheetPrefix title touchpad:unused webname cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CONNECTS": "33",
      "DEF": "8085 global",
      "FD": "8",
      "NAME": "WEBtablet",
      "NR": "9",
      "NTFY_ORDER": "50-WEBtablet",
      "PORT": "8085",
      "STATE": "Initialized",
      "TYPE": "FHEMWEB"
    },
    "Readings": {    },
    "Attributes": {      "stylesheetPrefix": "touchpad"    }
  },
  {
    "Name":"WZ_Luftfeuchtigkeit",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "WZ_Luftfeuchtigkeit",
      "NR": "65",
      "STATE": "46.8%",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"46.8", "Time":"2016-11-23 23:50:43" }    },
    "Attributes": {
      "group": "Sensoren",
      "icon": "weather_humidity",
      "room": "Wohnzimmer",
      "stateFormat": "state%"
    }
  },
  {
    "Name":"WZ_RH_T",
    "PossibleSets":"clear reboot time",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 config:M,I mode:node,repeater version:1.4 setCommands setReading_.+ mapReadingType_.+ mapReading_.+ requestAck:1 IODev showtime:0,1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "101",
      "NAME": "WZ_RH_T",
      "NR": "61",
      "STATE": "T:23.8°C_RH:46.8%_TP:11.8°C_a:10.1 g/kg",
      "TYPE": "MYSENSORS_DEVICE",
      "ack": "0",
      "protocol": "1.5.4",
      "radioId": "101",
      "repeater": "1"
    },
    "Readings": {
      "SKETCH_NAME": { "Value":"Humidity", "Time":"2016-06-18 16:21:03" },
      "SKETCH_VERSION": { "Value":"1.0", "Time":"2016-06-18 16:21:03" },
      "[temperature1": { "Value":"0", "Time":"2016-05-30 23:15:55" },
      "absFeuchte": { "Value":"10.1", "Time":"2016-11-23 23:50:43" },
      "dewpoint": { "Value":"11.8", "Time":"2016-11-23 23:50:43" },
      "humidity": { "Value":"46.8", "Time":"2016-11-23 23:50:43" },
      "parentId": { "Value":"0", "Time":"2016-06-18 16:21:01" },
      "statHumidityDay": { "Value":"Min: 60.4 Avg: 60.6 Max: 60.8", "Time":"2016-06-02 00:28:45" },
      "statHumidityDayLast": { "Value":"Min: 60.3 Avg: 60.5 Max: 60.7", "Time":"2016-06-01 23:59:55" },
      "statHumidityMonth": { "Value":"Min: 60.3 Avg: 60.5 Max: 60.8 (since: 2016-06-01_23:08:48 )", "Time":"2016-06-02 00:28:45" },
      "statHumidityTendency": { "Value":"1h: +0.0 2h: -0.2 3h: -0.2 6h: -0.1", "Time":"2016-07-18 19:59:55" },
      "statHumidityYear": { "Value":"Min: 60.3 Avg: 60.5 Max: 60.8 (since: 2016-06-01_23:08:48 )", "Time":"2016-06-02 00:28:45" },
      "statTemperatureDay": { "Value":"Min: 0 Avg: 0 Max: 0", "Time":"2016-06-02 00:33:15" },
      "statTemperatureDayLast": { "Value":"Min: 0 Avg: 0 Max: 0", "Time":"2016-06-01 23:59:55" },
      "statTemperatureMonth": { "Value":"Min: 0 Avg: 0 Max: 0 (since: 2016-06-01_23:08:48 )", "Time":"2016-06-02 00:33:15" },
      "statTemperatureYear": { "Value":"Min: 0 Avg: 0 Max: 0 (since: 2016-06-01_23:08:48 )", "Time":"2016-06-02 00:33:15" },
      "temperature1": { "Value":"23.8", "Time":"2016-11-23 23:50:11" }
    },
    "Attributes": {
      "IODev": "meinMSG",
      "icon": "icoKLIMA",
      "mapReading_humidity": "0 humidity",
      "mapReading_temperature1": "1 temperature",
      "mode": "repeater",
      "stateFormat": "T:temperature1°C_RH:humidity%_TP:dewpoint°C_a:absFeuchte g/kg",
      "version": "1.5.4"
    }
  },
  {
    "Name":"WZ_Rolladen",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "WZ_Rolladen",
      "NR": "84",
      "STATE": "Auf",
      "TYPE": "dummy"
    },
    "Readings": {
      "Auf": { "Value":"0", "Time":"2016-05-29 16:56:08" },
      "state": { "Value":"Auf", "Time":"2016-11-23 16:47:13" }
    },
    "Attributes": {
      "cmdIcon": "Auf:control_centr_arrow_up Zu:control_centr_arrow_down Stop:rc_STOP",
      "group": "Rolladen",
      "icon": "fts_shutter_100",
      "room": "Homekit,Wohnzimmer",
      "webCmd": "Auf:Stop:Zu"
    }
  },
  {
    "Name":"WZ_Rolladen_Beschattung",
    "PossibleSets":"on off",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "WZ_Rolladen_Beschattung",
      "NR": "95",
      "STATE": "off",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"off", "Time":"2016-10-17 11:21:15" }    },
    "Attributes": {
      "devStateIcon": "on:ios-on-blue off:ios-off",
      "genericDeviceType": "switch",
      "group": "Rolladen",
      "icon": "fts_shutter_70",
      "room": "Homekit,Wohnzimmer",
      "setList": "on off",
      "stateFormat": "state",
      "webCmd": "on:off"
    }
  },
  {
    "Name":"WZ_Rolladen_Beschattung_cmd",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([WZ_Rolladen_Beschattung] eq \u0022on\u0022 and [WZ_Rolladen] eq \u0022Auf\u0022) \u000a(set WZ_Rolladen Zu)##\u000a(set WZ_Rolladen Stop)##\u000a(set WZ_Rolladen Beschattung)##\u000aDOELSEIF\u000a([WZ_Rolladen_Beschattung] eq \u0022off\u0022 and [WZ_Rolladen] eq \u0022Beschattung\u0022) \u000a(set WZ_Rolladen Auf)",
      "NAME": "WZ_Rolladen_Beschattung_cmd",
      "NR": "96",
      "NTFY_ORDER": "50-WZ_Rolladen_Beschattung_cmd",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"WZ_Rolladen", "Time":"2016-11-23 16:47:13" },
      "cmd": { "Value":"1.3", "Time":"2016-10-17 11:21:19" },
      "cmd_event": { "Value":"WZ_Rolladen_Beschattung", "Time":"2016-10-17 11:21:19" },
      "cmd_nr": { "Value":"1", "Time":"2016-10-17 11:21:19" },
      "cmd_seqnr": { "Value":"3", "Time":"2016-10-17 11:21:19" },
      "e_WZ_Rolladen_Beschattung_STATE": { "Value":"off", "Time":"2016-10-17 11:21:15" },
      "e_WZ_Rolladen_STATE": { "Value":"Auf", "Time":"2016-11-23 16:47:13" },
      "state": { "Value":"cmd_1", "Time":"2016-10-17 11:21:19" },
      "wait_timer": { "Value":"no timer", "Time":"2016-10-17 11:21:19" }
    },
    "Attributes": {
      "addStateEvent": "1",
      "do": "always",
      "wait": "0,10,2"
    }
  },
  {
    "Name":"WZ_Rolladen_MS",
    "PossibleSets":"clear power1:1 power2:1 reboot status1:on,off status2:on,off time",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 config:M,I mode:node,repeater version:1.4 setCommands setReading_.+ mapReadingType_.+ mapReading_.+ requestAck:1 IODev showtime:0,1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "1",
      "NAME": "WZ_Rolladen_MS",
      "NR": "82",
      "STATE": "Auf:off Zu:off",
      "TYPE": "MYSENSORS_DEVICE",
      "ack": "0",
      "protocol": "1.5.4",
      "radioId": "1",
      "repeater": "1"
    },
    "Readings": {
      "SKETCH_NAME": { "Value":"Relay", "Time":"2016-07-27 14:50:46" },
      "SKETCH_VERSION": { "Value":"1.0", "Time":"2016-07-27 14:50:46" },
      "parentId": { "Value":"0", "Time":"2016-07-27 14:50:44" },
      "status1": { "Value":"off", "Time":"2016-11-23 16:47:13" },
      "status2": { "Value":"off", "Time":"2016-11-23 16:47:13" }
    },
    "Attributes": {
      "IODev": "meinMSG",
      "icon": "fts_shutter_1w_100",
      "mapReading_power1": "1 power",
      "mapReading_power2": "2 power",
      "mapReading_status1": "1 status",
      "mapReading_status2": "2 status",
      "mode": "repeater",
      "setReading_power1": "1",
      "setReading_power2": "1",
      "setReading_status1": "on,off",
      "setReading_status2": "on,off",
      "stateFormat": "Auf:status1 Zu:status2",
      "version": "1.5.4"
    }
  },
  {
    "Name":"WZ_Rolladen_auf",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([WZ_Rolladen] eq \u0022Auf\u0022)\u000a(set WZ_Rolladen_MS status1 on)##\u000a(set WZ_Rolladen_MS status1 off)##  \u000aDOELSEIF ([WZ_Rolladen] ne \u0022Auf\u0022) (set WZ_Rolladen_MS status1 off)",
      "NAME": "WZ_Rolladen_auf",
      "NR": "87",
      "NTFY_ORDER": "50-WZ_Rolladen_auf",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"WZ_Rolladen", "Time":"2016-11-23 16:47:13" },
      "cmd": { "Value":"1.2", "Time":"2016-11-23 16:47:13" },
      "cmd_event": { "Value":"WZ_Rolladen", "Time":"2016-11-23 16:47:13" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-23 16:47:13" },
      "cmd_seqnr": { "Value":"2", "Time":"2016-11-23 16:47:13" },
      "e_WZ_Rolladen_STATE": { "Value":"Auf", "Time":"2016-11-23 16:47:13" },
      "state": { "Value":"cmd_1", "Time":"2016-11-23 16:47:13" },
      "wait_timer": { "Value":"no timer", "Time":"2016-11-23 16:47:13" }
    },
    "Attributes": {
      "do": "always",
      "wait": "0,0.5"
    }
  },
  {
    "Name":"WZ_Rolladen_stop",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([WZ_Rolladen] eq \u0022Stop\u0022)\u000a(set WZ_Rolladen_MS status1 on)##\u000a(set WZ_Rolladen_MS status1 off)##\u000a",
      "NAME": "WZ_Rolladen_stop",
      "NR": "91",
      "NTFY_ORDER": "50-WZ_Rolladen_stop",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"WZ_Rolladen", "Time":"2016-11-23 16:47:13" },
      "cmd": { "Value":"1.2", "Time":"2016-11-23 15:31:14" },
      "cmd_event": { "Value":"WZ_Rolladen", "Time":"2016-11-23 15:31:14" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-23 15:31:14" },
      "cmd_seqnr": { "Value":"2", "Time":"2016-11-23 15:31:14" },
      "e_WZ_Rolladen_STATE": { "Value":"Auf", "Time":"2016-11-23 16:47:13" },
      "state": { "Value":"cmd_1", "Time":"2016-11-23 15:31:14" },
      "wait_timer": { "Value":"no timer", "Time":"2016-11-23 15:31:14" }
    },
    "Attributes": {
      "do": "always",
      "wait": "0,0.5"
    }
  },
  {
    "Name":"WZ_Rolladen_zu",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([WZ_Rolladen] eq \u0022Zu\u0022)\u000a(set WZ_Rolladen_MS status2 on)##\u000a(set WZ_Rolladen_MS status2 off)##  \u000aDOELSEIF ([WZ_Rolladen] eq \u0022Auf\u0022) (set WZ_Rolladen_MS status2 off)",
      "NAME": "WZ_Rolladen_zu",
      "NR": "89",
      "NTFY_ORDER": "50-WZ_Rolladen_zu",
      "STATE": "cmd_2",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"WZ_Rolladen", "Time":"2016-11-23 16:47:13" },
      "cmd": { "Value":"2", "Time":"2016-11-23 16:47:13" },
      "cmd_event": { "Value":"WZ_Rolladen", "Time":"2016-11-23 16:47:13" },
      "cmd_nr": { "Value":"2", "Time":"2016-11-23 16:47:13" },
      "e_WZ_Rolladen_STATE": { "Value":"Auf", "Time":"2016-11-23 16:47:13" },
      "state": { "Value":"cmd_2", "Time":"2016-11-23 16:47:13" },
      "wait_timer": { "Value":"no timer", "Time":"2016-11-23 15:30:59" }
    },
    "Attributes": {
      "do": "always",
      "wait": "0,0.5"
    }
  },
  {
    "Name":"WZ_Rollo",
    "PossibleSets":" open:noArg closed:noArg unblocked:noArg extern:open,closed,stop position:0,10,20,30,40,50,60,70,80,90,100 half:noArg stop:noArg blocked:noArg reset:open,closed",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5  secondsDown secondsUp excessTop excessBottom switchTime resetTime reactionTime blockMode:blocked,force-open,force-closed,only-up,only-down,half-up,half-down,none commandUp commandUp2 commandUp3 commandDown commandDown2 commandDown3 commandStop commandStopDown commandStopUp automatic-enabled:on,off automatic-delay autoStop:1,0 type:normal,HomeKit event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "WZ_Rollo",
      "NR": "147",
      "STATE": "open",
      "TYPE": "ROLLO",
      "stoptime": "1479916051"
    },
    "Readings": {
      "command": { "Value":"open", "Time":"2016-11-23 16:47:13" },
      "desired_position": { "Value":"0", "Time":"2016-11-23 16:47:13" },
      "drive-type": { "Value":"modul", "Time":"2016-11-23 16:47:13" },
      "last_drive": { "Value":"drive-up", "Time":"2016-11-23 16:47:13" },
      "position": { "Value":"0", "Time":"2016-11-23 16:47:31" },
      "state": { "Value":"open", "Time":"2016-11-23 16:47:31" }
    },
    "Attributes": {
      "autoStop": "1",
      "commandDown": "set WZ_Rolladen Zu",
      "commandStop": "set WZ_Rolladen Stop",
      "commandUp": "set WZ_Rolladen Auf",
      "devStateIcon": "open:fts_shutter_10:closed closed:fts_shutter_100:open half:fts_shutter_50:closed drive-up:fts_shutter_up@red:stop drive-down:fts_shutter_down@red:stop position-100:fts_shutter_100:open position-90:fts_shutter_80:closed position-80:fts_shutter_80:closed position-70:fts_shutter_70:closed position-60:fts_shutter_60:closed position-50:fts_shutter_50:closed position-40:fts_shutter_40:open position-30:fts_shutter_30:open position-20:fts_shutter_20:open position-10:fts_shutter_10:open position-0:fts_shutter_10:closed",
      "excessBottom": "0",
      "excessTop": "0",
      "resetTime": "0",
      "room": "Wohnzimmer",
      "secondsDown": "30",
      "secondsUp": "36",
      "switchTime": "1",
      "type": "normal",
      "webCmd": "open:closed:half:stop:position"
    }
  },
  {
    "Name":"WZ_Rollo_auf_dummy",
    "PossibleSets":"on off",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "WZ_Rollo_auf_dummy",
      "NR": "139",
      "STATE": "off",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"off", "Time":"2016-07-26 23:26:06" }    },
    "Attributes": {
      "setList": "on off",
      "webCmd": "on:off"
    }
  },
  {
    "Name":"WZ_Rollo_stop_dummy",
    "PossibleSets":"on off",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "WZ_Rollo_stop_dummy",
      "NR": "141",
      "STATE": "off",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"off", "Time":"2016-07-27 14:27:29" }    },
    "Attributes": {
      "setList": "on off",
      "webCmd": "on:off"
    }
  },
  {
    "Name":"WZ_Rollo_zu_dummy",
    "PossibleSets":"on off",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "WZ_Rollo_zu_dummy",
      "NR": "143",
      "STATE": "off",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"off", "Time":"2016-07-26 23:26:53" }    },
    "Attributes": {
      "setList": "on off",
      "webCmd": "on:off"
    }
  },
  {
    "Name":"WZ_Temperatur",
    "PossibleSets":" ",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 readingList setList useSetExtensions event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "WZ_Temperatur",
      "NR": "63",
      "STATE": "23.8°C",
      "TYPE": "dummy"
    },
    "Readings": {      "state": { "Value":"23.8", "Time":"2016-11-23 23:50:11" }    },
    "Attributes": {
      "genericDeviceType": "thermometer",
      "group": "Sensoren",
      "homebridgeMapping": "CurrentTemperature=state",
      "icon": "temp_temperature",
      "room": "Homekit,Wohnzimmer",
      "stateFormat": "state°C"
    }
  },
  {
    "Name":"autocreate",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 autosave filelog device_room weblink weblink_room disable ignoreTypes autocreateThreshold cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "NAME": "autocreate",
      "NOTIFYDEV": "global",
      "NR": "14",
      "NTFY_ORDER": "50-autocreate",
      "STATE": "active",
      "TYPE": "autocreate"
    },
    "Readings": {    },
    "Attributes": {      "filelog": "./log/%NAME-%Y.log"    }
  },
  {
    "Name":"dew_all",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 max_timediff absFeuchte cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CMD_TYPE": "dewpoint",
      "DEF": "dewpoint .* temperature1 humidity dewpoint",
      "DEV_REGEXP": ".*",
      "HUM_NAME": "humidity",
      "NAME": "dew_all",
      "NEW_NAME": "dewpoint",
      "NR": "126",
      "NTFY_ORDER": "10-dew_all",
      "STATE": "active",
      "TEMP_NAME": "temperature1",
      "TYPE": "dewpoint"
    },
    "Readings": {    },
    "Attributes": {
      "absFeuchte": "1",
      "max_timediff": "600"
    }
  },
  {
    "Name":"eventTypes",
    "PossibleSets":"clear:noArg flush:noArg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 ignoreList cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "./log/eventTypes.txt",
      "NAME": "eventTypes",
      "NR": "16",
      "NTFY_ORDER": "50-eventTypes",
      "STATE": "active",
      "TYPE": "eventTypes"
    },
    "Readings": {    },
    "Attributes": {    }
  },
  {
    "Name":"global",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 altitude apiversion archivecmd archivedir archiveCompress autoload_undefined_devices:1,0 autosave:1,0 backup_before_update backupcmd backupdir backupsymlink blockingCallMax commandref:modular,full configfile dnsServer dupTimeout exclude_from_update featurelevel genericDisplayType:switch,outlet,light,blind,speaker,thermostat holiday2we language:EN,DE lastinclude latitude logdir logfile longitude modpath motd mseclog:1,0 nofork:1,0 nrarchive perlSyntaxCheck pidfilename port restartDelay restoreDirs sendStatistics:onUpdate,manually,never showInternalValues:1,0 sslVersion stacktrace:1,0 statefile title uniqueID updateInBackground:1,0 updateNoFileCheck:1,0 version cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "no definition",
      "NAME": "global",
      "NR": "1",
      "STATE": "no definition",
      "TYPE": "Global",
      "currentlogfile": "./log/fhem-2016-11.log",
      "logfile": "./log/fhem-%Y-%m.log"
    },
    "Readings": {    },
    "Attributes": {
      "autoload_undefined_devices": "1",
      "configfile": "fhem.cfg",
      "latitude": "50.796800",
      "logfile": "./log/fhem-%Y-%m.log",
      "longitude": "6.128920",
      "modpath": ".",
      "motd": "SecurityCheck:\u000a\u000aWEB,WEBphone,WEBtablet has no associated allowed device with basicAuth.\u000atelnetPort has no associated allowed device with password/globalpassword.\u000a\u000aRestart FHEM for a new check if the problem is fixed,\u000aor set the global attribute motd to none to supress this message.\u000a",
      "sendStatistics": "onUpdate",
      "statefile": "./log/fhem.save",
      "updateInBackground": "1",
      "userattr": "cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride",
      "verbose": "3",
      "version": "fhem.pl:12192/2016-09-22"
    }
  },
  {
    "Name":"harmony_37097992",
    "PossibleSets":"command hidDevice:noArg text cursor:up,down,left,right,pageUp,pageDown,home,end special:previousTrack,nextTrack,stop,playPause,volumeUp,volumeDown,mute",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1 nossl:1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CHANGED": "null",
      "ConnectionState": "Initialized",
      "DEF": "DEVICE 37097992",
      "NAME": "harmony_37097992",
      "NOTIFYDEV": "global",
      "NR": "133",
      "NTFY_ORDER": "50-harmony_37097992",
      "STATE": "manual",
      "TYPE": "harmony",
      "hub": "HarmonyHub",
      "id": "37097992"
    },
    "Readings": {      "power": { "Value":"manual", "Time":"2016-11-23 16:49:44" }    },
    "Attributes": {
      "alias": "Amazon Fire TV",
      "event-on-change-reading": ".*",
      "room": "harmony",
      "stateFormat": "power"
    }
  },
  {
    "Name":"harmony_37097994",
    "PossibleSets":"command hidDevice:noArg text cursor:up,down,left,right,pageUp,pageDown,home,end special:previousTrack,nextTrack,stop,playPause,volumeUp,volumeDown,mute",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1 nossl:1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CHANGED": "null",
      "ConnectionState": "Initialized",
      "DEF": "DEVICE 37097994",
      "NAME": "harmony_37097994",
      "NOTIFYDEV": "global",
      "NR": "134",
      "NTFY_ORDER": "50-harmony_37097994",
      "STATE": "off",
      "TYPE": "harmony",
      "hub": "HarmonyHub",
      "id": "37097994"
    },
    "Readings": {      "power": { "Value":"off", "Time":"2016-11-23 16:49:44" }    },
    "Attributes": {
      "alias": "Samsung TV",
      "event-on-change-reading": ".*",
      "room": "harmony",
      "stateFormat": "power"
    }
  },
  {
    "Name":"harmony_37097995",
    "PossibleSets":"command hidDevice:noArg text cursor:up,down,left,right,pageUp,pageDown,home,end special:previousTrack,nextTrack,stop,playPause,volumeUp,volumeDown,mute",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1 nossl:1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CHANGED": "null",
      "ConnectionState": "Initialized",
      "DEF": "DEVICE 37097995",
      "NAME": "harmony_37097995",
      "NOTIFYDEV": "global",
      "NR": "135",
      "NTFY_ORDER": "50-harmony_37097995",
      "STATE": "off",
      "TYPE": "harmony",
      "hub": "HarmonyHub",
      "id": "37097995"
    },
    "Readings": {      "power": { "Value":"off", "Time":"2016-11-23 16:49:44" }    },
    "Attributes": {
      "alias": "Onkyo AV-Empfänger",
      "event-on-change-reading": ".*",
      "room": "harmony",
      "stateFormat": "power"
    }
  },
  {
    "Name":"harmony_37097996",
    "PossibleSets":"command hidDevice:noArg text cursor:up,down,left,right,pageUp,pageDown,home,end special:previousTrack,nextTrack,stop,playPause,volumeUp,volumeDown,mute",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1 nossl:1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CHANGED": "null",
      "ConnectionState": "Initialized",
      "DEF": "DEVICE 37097996",
      "NAME": "harmony_37097996",
      "NOTIFYDEV": "global",
      "NR": "131",
      "NTFY_ORDER": "50-harmony_37097996",
      "STATE": "off",
      "TYPE": "harmony",
      "hub": "HarmonyHub",
      "id": "37097996"
    },
    "Readings": {      "power": { "Value":"off", "Time":"2016-11-23 16:49:44" }    },
    "Attributes": {
      "alias": "Microsoft Xbox 360",
      "event-on-change-reading": ".*",
      "room": "harmony",
      "stateFormat": "power"
    }
  },
  {
    "Name":"harmony_37098045",
    "PossibleSets":"command hidDevice:noArg text cursor:up,down,left,right,pageUp,pageDown,home,end special:previousTrack,nextTrack,stop,playPause,volumeUp,volumeDown,mute",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1 nossl:1 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CHANGED": "null",
      "ConnectionState": "Initialized",
      "DEF": "DEVICE 37098045",
      "NAME": "harmony_37098045",
      "NOTIFYDEV": "global",
      "NR": "132",
      "NTFY_ORDER": "50-harmony_37098045",
      "STATE": "off",
      "TYPE": "harmony",
      "hub": "HarmonyHub",
      "id": "37098045"
    },
    "Readings": {      "power": { "Value":"off", "Time":"2016-11-23 16:49:44" }    },
    "Attributes": {
      "alias": "Samsung DVR",
      "event-on-change-reading": ".*",
      "room": "harmony",
      "stateFormat": "power"
    }
  },
  {
    "Name":"initialUsbCheck",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 disabledForIntervals forwardReturnValue:1,0 readLog:1,0 showtime:1,0 addStateEvent:1,0 cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "global:INITIALIZED usb create",
      "NAME": "initialUsbCheck",
      "NOTIFYDEV": "global",
      "NR": "19",
      "NTFY_ORDER": "50-initialUsbCheck",
      "REGEXP": "global:INITIALIZED",
      "STATE": "2016-10-09 15:58:10",
      "TYPE": "notify"
    },
    "Readings": {      "state": { "Value":"active", "Time":"2016-10-09 15:58:06" }    },
    "Attributes": {    }
  },
  {
    "Name":"meinMSG",
    "PossibleSets":"connect disconnect inclusion-mode:on,off",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 autocreate:1 requestAck:1 first-sensorid last-sensorid stateFormat cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "/dev/serial/by-id/usb-FTDI_FT232R_USB_UART_A104X1QJ-if00-port0@115200",
      "DeviceName": "/dev/serial/by-id/usb-FTDI_FT232R_USB_UART_A104X1QJ-if00-port0@115200",
      "FD": "14",
      "NAME": "meinMSG",
      "NOTIFYDEV": "global",
      "NR": "50",
      "NTFY_ORDER": "50-meinMSG",
      "PARTIAL": "",
      "STATE": "startup complete",
      "TYPE": "MYSENSORS",
      "ack": "0",
      "inclusion-mode": "1",
      "outstandingAck": "0"
    },
    "Readings": {
      "connection": { "Value":"startup complete", "Time":"2016-10-09 15:58:21" },
      "state": { "Value":"opened", "Time":"2016-10-09 15:58:19" }
    },
    "Attributes": {
      "autocreate": "1",
      "stateFormat": "connection"
    }
  },
  {
    "Name":"nanoCUL",
    "PossibleSets":"ITClock bWidth freq hmPairForSec hmPairSerial led patable rAmpl raw reopen sens",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 addvaltrigger connectCommand do_not_notify:1,0 dummy:1,0 \u0022 . hmId longids hmProtocolEvents:0_off,1_dump,2_dumpFull,3_dumpTrigger model:CUL,CUN,CUNO,SCC,nanoCUL rfmode:SlowRF,HomeMatic,MAX,WMBus_T,WMBus_S,KOPP_FC sendpool showtime:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CMDS": "",
      "Clients": ":CUL_HM:HMS:CUL_IR:STACKABLE_CC:",
      "DEF": "/dev/serial/by-id/usb-FTDI_FT232R_USB_UART_A104X236-if00-port0@38400 1234",
      "DeviceName": "/dev/serial/by-id/usb-FTDI_FT232R_USB_UART_A104X236-if00-port0@38400",
      "FHTID": "1234",
      "NAME": "nanoCUL",
      "NR": "102",
      "PARTIAL": "",
      "STATE": "disconnected",
      "TYPE": "CUL",
      "initString": "X21\u000aAr"
    },
    "Readings": {
      "ccconf": { "Value":"freq:868.300MHz bWidth:325KHz rAmpl:42dB sens:4dB", "Time":"2016-05-24 21:33:32" },
      "cmds": { "Value":"B C F i A Z E k G M K U Y R T V W X e f l t x", "Time":"2016-05-24 22:01:17" },
      "state": { "Value":"disconnected", "Time":"2016-10-09 15:58:08" }
    },
    "Attributes": {      "rfmode": "HomeMatic"    }
  },
  {
    "Name":"off_LuminoodleSchreibtisch",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 disabledForIntervals forwardReturnValue:1,0 readLog:1,0 showtime:1,0 addStateEvent:1,0 cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "LuminoodleSchreibtisch:off.* {system(\u0022/usr/bin/send 11100 2 0 &\u0022)}",
      "NAME": "off_LuminoodleSchreibtisch",
      "NOTIFYDEV": "LuminoodleSchreibtisch",
      "NR": "22",
      "NTFY_ORDER": "50-off_LuminoodleSchreibtisch",
      "REGEXP": "LuminoodleSchreibtisch:off.*",
      "STATE": "2016-11-22 23:36:58",
      "TYPE": "notify"
    },
    "Readings": {      "state": { "Value":"active", "Time":"2016-10-09 15:58:06" }    },
    "Attributes": {    }
  },
  {
    "Name":"off_StehlampeWZ",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 disabledForIntervals forwardReturnValue:1,0 readLog:1,0 showtime:1,0 addStateEvent:1,0 cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "StehlampeWZ:off.* {system(\u0022/usr/bin/send 11100 3 0 &\u0022)}",
      "NAME": "off_StehlampeWZ",
      "NOTIFYDEV": "StehlampeWZ",
      "NR": "26",
      "NTFY_ORDER": "50-off_StehlampeWZ",
      "REGEXP": "StehlampeWZ:off.*",
      "STATE": "2016-11-14 17:30:57",
      "TYPE": "notify"
    },
    "Readings": {      "state": { "Value":"active", "Time":"2016-10-09 15:58:06" }    },
    "Attributes": {    }
  },
  {
    "Name":"on_LuminoodleSchreibtisch",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 disabledForIntervals forwardReturnValue:1,0 readLog:1,0 showtime:1,0 addStateEvent:1,0 cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "LuminoodleSchreibtisch:on.* {system(\u0022/usr/bin/send 11100 2 1 &\u0022)}",
      "NAME": "on_LuminoodleSchreibtisch",
      "NOTIFYDEV": "LuminoodleSchreibtisch",
      "NR": "21",
      "NTFY_ORDER": "50-on_LuminoodleSchreibtisch",
      "REGEXP": "LuminoodleSchreibtisch:on.*",
      "STATE": "2016-11-23 21:44:48",
      "TYPE": "notify"
    },
    "Readings": {      "state": { "Value":"active", "Time":"2016-10-09 15:58:06" }    },
    "Attributes": {    }
  },
  {
    "Name":"on_StehlampeWZ",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 disabledForIntervals forwardReturnValue:1,0 readLog:1,0 showtime:1,0 addStateEvent:1,0 cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "StehlampeWZ:on.* {system(\u0022/usr/bin/send 11100 3 1 &\u0022)}",
      "NAME": "on_StehlampeWZ",
      "NOTIFYDEV": "StehlampeWZ",
      "NR": "27",
      "NTFY_ORDER": "50-on_StehlampeWZ",
      "REGEXP": "StehlampeWZ:on.*",
      "STATE": "2016-11-14 17:30:56",
      "TYPE": "notify"
    },
    "Readings": {      "state": { "Value":"active", "Time":"2016-10-09 15:58:06" }    },
    "Attributes": {    }
  },
  {
    "Name":"pushover1",
    "PossibleSets":"msg",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 timestamp:0,1 title sound:pushover,bike,bugle,cashregister,classical,cosmic,falling,gamelan,incoming,intermission,magic,mechanical,pianobar,siren,spacealarm,tugboat,alien,climb,persistent,echo,updown,none device priority:0,1,-1,-2 callbackUrl event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "APP_TOKEN": "a6coy58Ah1sk1CGjDfMrPpwN2edcaa",
      "DEF": "a6coy58Ah1sk1CGjDfMrPpwN2edcaa uunhiCX4J5dEpSfk3ZxSC33XJQ2L13",
      "NAME": "pushover1",
      "NR": "31",
      "STATE": "connected",
      "TYPE": "Pushover",
      "USER_KEY": "uunhiCX4J5dEpSfk3ZxSC33XJQ2L13",
      "VALIDATION_TIMER": "1479953139.75137"
    },
    "Readings": {
      "apiLimit": { "Value":"7500", "Time":"2016-06-12 22:15:00" },
      "apiRemaining": { "Value":"7469", "Time":"2016-06-15 22:15:00" },
      "apiReset": { "Value":"1467349200", "Time":"2016-06-12 22:15:00" },
      "available": { "Value":"1", "Time":"2016-10-14 22:04:00" },
      "devices": { "Value":"Tim_iPhone", "Time":"2016-07-25 14:42:24" },
      "group": { "Value":"0", "Time":"2016-07-25 14:42:24" },
      "lastAction": { "Value":"-", "Time":"2016-06-15 22:15:00" },
      "lastDevice": { "Value":"all", "Time":"2016-06-15 22:15:00" },
      "lastMessage": { "Value":"Luminoodle geht um 6:20 an.", "Time":"2016-06-15 22:15:00" },
      "lastPriority": { "Value":"0", "Time":"2016-06-15 22:15:00" },
      "lastResult": { "Value":"ok", "Time":"2016-11-23 21:05:39" },
      "lastTitle": { "Value":"fhem", "Time":"2016-06-15 22:15:00" },
      "state": { "Value":"connected", "Time":"2016-10-14 22:04:00" },
      "tokenState": { "Value":"valid", "Time":"2016-05-07 00:24:50" },
      "userState": { "Value":"valid", "Time":"2016-05-07 00:24:50" }
    },
    "Attributes": {    }
  },
  {
    "Name":"rgr_Bewohner",
    "PossibleSets":"state:home,gotosleep,absent,gone addRoommate addGuest removeRoommate:rr_Tim,rr_Anna create:wakeuptimer",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 rgr_showAllStates:0,1 rgr_states:multiple-strict,home,gotosleep,asleep,awoken,absent,gone rgr_wakeupDevice event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CHANGED": "null",
      "NAME": "rgr_Bewohner",
      "NR": "148",
      "NTFY_ORDER": "50-rgr_Bewohner",
      "ROOMMATES": "rr_Tim,rr_Anna",
      "STATE": "home",
      "TYPE": "RESIDENTS"
    },
    "Readings": {
      "lastActivity": { "Value":"home", "Time":"2016-08-03 18:36:42" },
      "lastActivityBy": { "Value":"Anna", "Time":"2016-08-03 18:36:42" },
      "lastActivityByDev": { "Value":"rr_Anna", "Time":"2016-08-03 18:36:42" },
      "lastArrival": { "Value":"2016-08-01 19:13:10", "Time":"2016-08-01 19:13:10" },
      "lastDeparture": { "Value":"2016-08-01 17:46:28", "Time":"2016-08-01 17:46:28" },
      "lastDurAbsence": { "Value":"01:26:42", "Time":"2016-08-01 19:13:10" },
      "lastDurAbsence_cr": { "Value":"87", "Time":"2016-08-01 19:13:10" },
      "lastDurPresence": { "Value":"00:00:02", "Time":"2016-08-01 17:46:28" },
      "lastDurPresence_cr": { "Value":"0", "Time":"2016-08-01 17:46:28" },
      "lastState": { "Value":"gone", "Time":"2016-08-01 19:13:10" },
      "presence": { "Value":"present", "Time":"2016-08-01 19:13:10" },
      "residentsAbsent": { "Value":"0", "Time":"2016-08-01 17:45:54" },
      "residentsAbsentDevs": { "Value":"-", "Time":"2016-08-01 17:45:54" },
      "residentsAbsentNames": { "Value":"-", "Time":"2016-08-01 17:45:54" },
      "residentsAsleep": { "Value":"0", "Time":"2016-08-01 15:48:41" },
      "residentsAsleepDevs": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsAsleepNames": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsAwoken": { "Value":"0", "Time":"2016-08-01 15:48:41" },
      "residentsAwokenDevs": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsAwokenNames": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsGone": { "Value":"0", "Time":"2016-08-03 18:36:42" },
      "residentsGoneDevs": { "Value":"-", "Time":"2016-08-03 18:36:42" },
      "residentsGoneNames": { "Value":"-", "Time":"2016-08-03 18:36:42" },
      "residentsGotosleep": { "Value":"0", "Time":"2016-08-01 17:46:28" },
      "residentsGotosleepDevs": { "Value":"-", "Time":"2016-08-01 17:46:28" },
      "residentsGotosleepNames": { "Value":"-", "Time":"2016-08-01 17:46:28" },
      "residentsHome": { "Value":"2", "Time":"2016-08-03 18:36:42" },
      "residentsHomeDevs": { "Value":"rr_Tim,rr_Anna", "Time":"2016-08-03 18:36:42" },
      "residentsHomeNames": { "Value":"Tim, Anna", "Time":"2016-08-03 18:36:42" },
      "residentsTotal": { "Value":"2", "Time":"2016-08-01 17:45:39" },
      "residentsTotalAbsent": { "Value":"0", "Time":"2016-08-03 18:36:42" },
      "residentsTotalAbsentDevs": { "Value":"-", "Time":"2016-08-03 18:36:42" },
      "residentsTotalAbsentNames": { "Value":"-", "Time":"2016-08-03 18:36:42" },
      "residentsTotalGuests": { "Value":"0", "Time":"2016-08-01 15:48:41" },
      "residentsTotalGuestsAbsent": { "Value":"0", "Time":"2016-08-01 15:48:41" },
      "residentsTotalGuestsAbsentDevs": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsTotalGuestsAbsentNames": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsTotalGuestsPresent": { "Value":"0", "Time":"2016-08-01 15:48:41" },
      "residentsTotalGuestsPresentDevs": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsTotalGuestsPresentNames": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsTotalPresent": { "Value":"2", "Time":"2016-08-03 18:36:42" },
      "residentsTotalPresentDevs": { "Value":"rr_Tim,rr_Anna", "Time":"2016-08-03 18:36:42" },
      "residentsTotalPresentNames": { "Value":"Tim, Anna", "Time":"2016-08-03 18:36:42" },
      "residentsTotalRoommates": { "Value":"2", "Time":"2016-08-01 17:45:39" },
      "residentsTotalRoommatesAbsent": { "Value":"0", "Time":"2016-08-03 18:36:42" },
      "residentsTotalRoommatesAbsentDevs": { "Value":"-", "Time":"2016-08-03 18:36:42" },
      "residentsTotalRoommatesAbsentNames": { "Value":"-", "Time":"2016-08-03 18:36:42" },
      "residentsTotalRoommatesPresent": { "Value":"2", "Time":"2016-08-03 18:36:42" },
      "residentsTotalRoommatesPresentDevs": { "Value":"rr_Tim,rr_Anna", "Time":"2016-08-03 18:36:42" },
      "residentsTotalRoommatesPresentNames": { "Value":"Tim, Anna", "Time":"2016-08-03 18:36:42" },
      "residentsTotalWakeup": { "Value":"0", "Time":"2016-08-01 15:48:41" },
      "residentsTotalWakeupDevs": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsTotalWakeupNames": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsTotalWayhome": { "Value":"0", "Time":"2016-08-01 15:48:41" },
      "residentsTotalWayhomeDelayed": { "Value":"0", "Time":"2016-08-01 15:48:41" },
      "residentsTotalWayhomeDelayedDevs": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsTotalWayhomeDelayedNames": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsTotalWayhomeDevs": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "residentsTotalWayhomeNames": { "Value":"-", "Time":"2016-08-01 15:48:41" },
      "state": { "Value":"home", "Time":"2016-08-01 19:13:10" }
    },
    "Attributes": {
      "alias": "Residents",
      "devStateIcon": ".*home:status_available:absent .*absent:status_away_1:home .*gone:status_standby:home .*none:control_building_empty .*gotosleep:status_night:asleep .*asleep:status_night:awoken .*awoken:status_available:home .*:user_unknown:home",
      "group": "Home State",
      "icon": "control_building_filled",
      "room": "Residents",
      "webCmd": "state"
    }
  },
  {
    "Name":"roku",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 favourites httpPort cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "HAS_IO::Socket::Multicast": "1",
      "ID": "",
      "NAME": "roku",
      "NR": "150",
      "NTFY_ORDER": "50-roku",
      "STATE": "???",
      "TYPE": "fakeRoku",
      "fhemHostname": "raspberrypi",
      "fhemIP": "192.168.192.37",
      "serial": "b89d0d915453181c708ada9310be323f"
    },
    "Readings": {    },
    "Attributes": {    }
  },
  {
    "Name":"roku:listener",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 favourites httpPort cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CONNECTS": "5596",
      "FD": "16",
      "NAME": "roku:listener",
      "NR": "157",
      "PNAME": "roku",
      "PORT": "45523",
      "STATE": "accepting",
      "TEMPORARY": "1",
      "TYPE": "fakeRoku"
    },
    "Readings": {    },
    "Attributes": {      "room": "hidden"    }
  },
  {
    "Name":"roku:responder",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 favourites httpPort cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "FD": "15",
      "NAME": "roku:responder",
      "NR": "156",
      "PNAME": "roku",
      "PORT": "1900",
      "STATE": "listening",
      "TEMPORARY": "1",
      "TYPE": "fakeRoku",
      "multicast": "1"
    },
    "Readings": {    },
    "Attributes": {      "room": "hidden"    }
  },
  {
    "Name":"roku_StehlampeWZ",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([roku:\u0022keypress: Home\u0022] and [StehlampeWZ] eq \u0022on\u0022) (set StehlampeWZ off)\u000aDOELSEIF\u000a([roku:\u0022keypress: Home\u0022] and [StehlampeWZ] eq \u0022off\u0022) (set StehlampeWZ on)",
      "NAME": "roku_StehlampeWZ",
      "NR": "154",
      "NTFY_ORDER": "50-roku_StehlampeWZ",
      "STATE": "cmd_2",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"roku", "Time":"2016-11-21 22:45:59" },
      "cmd": { "Value":"2", "Time":"2016-10-23 23:43:15" },
      "cmd_event": { "Value":"roku", "Time":"2016-10-23 23:43:15" },
      "cmd_nr": { "Value":"2", "Time":"2016-10-23 23:43:15" },
      "e_StehlampeWZ_STATE": { "Value":"off", "Time":"2016-11-14 17:30:57" },
      "e_StehlampeWZ_events": { "Value":"off", "Time":"2016-11-14 17:30:57" },
      "e_roku_events": { "Value":"keypress: Down", "Time":"2016-11-21 22:45:59" },
      "state": { "Value":"cmd_2", "Time":"2016-10-23 23:43:15" }
    },
    "Attributes": {      "do": "always"    }
  },
  {
    "Name":"roku_WZ_Rollo_closed",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([roku:\u0022keypress: Down\u0022]) (set WZ_Rollo closed)",
      "NAME": "roku_WZ_Rollo_closed",
      "NR": "152",
      "NTFY_ORDER": "50-roku_WZ_Rollo_closed",
      "STATE": "cmd_1",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"roku", "Time":"2016-11-21 22:45:59" },
      "cmd": { "Value":"1", "Time":"2016-11-21 22:45:59" },
      "cmd_event": { "Value":"roku", "Time":"2016-11-21 22:45:59" },
      "cmd_nr": { "Value":"1", "Time":"2016-11-21 22:45:59" },
      "e_roku_events": { "Value":"keypress: Down", "Time":"2016-11-21 22:45:59" },
      "state": { "Value":"cmd_1", "Time":"2016-11-21 22:45:59" }
    },
    "Attributes": {    }
  },
  {
    "Name":"roku_WZ_Rollo_stop",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([roku:\u0022keypress: Select\u0022]) (set WZ_Rollo stop)",
      "NAME": "roku_WZ_Rollo_stop",
      "NR": "153",
      "NTFY_ORDER": "50-roku_WZ_Rollo_stop",
      "STATE": "cmd_2",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"roku", "Time":"2016-11-21 22:45:59" },
      "cmd": { "Value":"2", "Time":"2016-11-21 22:45:59" },
      "cmd_event": { "Value":"roku", "Time":"2016-11-21 22:45:59" },
      "cmd_nr": { "Value":"2", "Time":"2016-11-21 22:45:59" },
      "e_roku_events": { "Value":"keypress: Down", "Time":"2016-11-21 22:45:59" },
      "state": { "Value":"cmd_2", "Time":"2016-11-21 22:45:59" }
    },
    "Attributes": {    }
  },
  {
    "Name":"roku_WZ_Rollo_up",
    "PossibleSets":"disable initialize enable",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:0,1 loglevel:0,1,2,3,4,5,6 wait do:always,resetwait cmdState state initialize repeatsame repeatcmd waitsame waitdel cmdpause timerWithWait:1,0 notexist selftrigger:wait,all timerevent:1,0 checkReadingEvent:1,0 addStateEvent:1,0 event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "([roku:\u0022keypress: Up\u0022]) (set WZ_Rollo open)",
      "NAME": "roku_WZ_Rollo_up",
      "NR": "151",
      "NTFY_ORDER": "50-roku_WZ_Rollo_up",
      "STATE": "cmd_2",
      "TYPE": "DOIF"
    },
    "Readings": {
      "Device": { "Value":"roku", "Time":"2016-11-21 22:45:59" },
      "cmd": { "Value":"2", "Time":"2016-11-21 22:45:58" },
      "cmd_event": { "Value":"roku", "Time":"2016-11-21 22:45:58" },
      "cmd_nr": { "Value":"2", "Time":"2016-11-21 22:45:58" },
      "e_roku_events": { "Value":"keypress: Down", "Time":"2016-11-21 22:45:59" },
      "state": { "Value":"cmd_2", "Time":"2016-11-21 22:45:58" }
    },
    "Attributes": {    }
  },
  {
    "Name":"rr_Anna",
    "PossibleSets":"state:home,gotosleep,absent,gone mood:calm,relaxed,happy,excited,lonely,sad,bored,stressed,uncomfortable,sleepy,angry,toggle location create:wakeuptimer",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 rr_locationHome rr_locationWayhome rr_locationUnderway rr_autoGoneAfter:12,16,24,26,28,30,36,48,60 rr_showAllStates:0,1 rr_realname:group,alias rr_states:multiple-strict,home,gotosleep,asleep,awoken,absent,gone rr_locations rr_moods rr_moodDefault rr_moodSleepy rr_passPresenceTo rr_noDuration:0,1 rr_wakeupDevice rr_geofenceUUIDs event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "rgr_Bewohner",
      "NAME": "rr_Anna",
      "NR": "155",
      "NTFY_ORDER": "50-rr_Anna",
      "RESIDENTGROUPS": "rgr_Bewohner,",
      "STATE": "home",
      "TYPE": "ROOMMATE"
    },
    "Readings": {
      "durTimerAbsence": { "Value":"00:00:00", "Time":"2016-08-03 18:36:42" },
      "durTimerAbsence_cr": { "Value":"0", "Time":"2016-08-03 18:36:42" },
      "durTimerPresence": { "Value":"2694:14:54", "Time":"2016-11-23 23:51:36" },
      "durTimerPresence_cr": { "Value":"161655", "Time":"2016-11-23 23:51:36" },
      "durTimerSleep": { "Value":"00:00:00", "Time":"2016-08-01 17:45:39" },
      "durTimerSleep_cr": { "Value":"0", "Time":"2016-08-01 17:45:39" },
      "lastArrival": { "Value":"2016-08-03 18:36:42", "Time":"2016-08-03 18:36:42" },
      "lastDeparture": { "Value":"2016-08-03 14:34:34", "Time":"2016-08-03 14:34:34" },
      "lastDurAbsence": { "Value":"04:02:08", "Time":"2016-08-03 18:36:42" },
      "lastDurAbsence_cr": { "Value":"242", "Time":"2016-08-03 18:36:42" },
      "lastDurPresence": { "Value":"43:21:24", "Time":"2016-08-03 14:34:34" },
      "lastDurPresence_cr": { "Value":"2601", "Time":"2016-08-03 14:34:34" },
      "lastLocation": { "Value":"home", "Time":"2016-08-03 14:34:34" },
      "lastMood": { "Value":"calm", "Time":"2016-08-03 14:34:34" },
      "lastState": { "Value":"gone", "Time":"2016-08-03 18:36:42" },
      "location": { "Value":"home", "Time":"2016-08-03 18:36:42" },
      "mood": { "Value":"calm", "Time":"2016-08-03 18:36:42" },
      "presence": { "Value":"present", "Time":"2016-08-03 18:36:42" },
      "state": { "Value":"home", "Time":"2016-08-03 18:36:42" },
      "wayhome": { "Value":"0", "Time":"2016-08-01 17:45:39" }
    },
    "Attributes": {
      "alias": "Status",
      "devStateIcon": ".*home:user_available:absent .*absent:user_away:home .*gone:user_ext_away:home .*gotosleep:scene_toilet:asleep .*asleep:scene_sleeping:awoken .*awoken:scene_sleeping_alternat:home .*:user_unknown:home",
      "group": "Anna",
      "icon": "people_sensor",
      "room": "Residents",
      "rr_realname": "group",
      "sortby": "1",
      "webCmd": "state"
    }
  },
  {
    "Name":"rr_Tim",
    "PossibleSets":"state:home,gotosleep,absent,gone mood:calm,relaxed,happy,excited,lonely,sad,bored,stressed,uncomfortable,sleepy,angry,toggle location create:wakeuptimer",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 rr_locationHome rr_locationWayhome rr_locationUnderway rr_autoGoneAfter:12,16,24,26,28,30,36,48,60 rr_showAllStates:0,1 rr_realname:group,alias rr_states:multiple-strict,home,gotosleep,asleep,awoken,absent,gone rr_locations rr_moods rr_moodDefault rr_moodSleepy rr_passPresenceTo rr_noDuration:0,1 rr_wakeupDevice rr_geofenceUUIDs event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "rgr_Bewohner",
      "NAME": "rr_Tim",
      "NR": "149",
      "NTFY_ORDER": "50-rr_Tim",
      "RESIDENTGROUPS": "rgr_Bewohner,",
      "STATE": "home",
      "TYPE": "ROOMMATE"
    },
    "Readings": {
      "durTimerAbsence": { "Value":"00:00:00", "Time":"2016-08-01 19:13:10" },
      "durTimerAbsence_cr": { "Value":"0", "Time":"2016-08-01 19:13:10" },
      "durTimerPresence": { "Value":"2741:38:26", "Time":"2016-11-23 23:51:36" },
      "durTimerPresence_cr": { "Value":"164498", "Time":"2016-11-23 23:51:36" },
      "durTimerSleep": { "Value":"00:00:00", "Time":"2016-08-01 15:48:41" },
      "durTimerSleep_cr": { "Value":"0", "Time":"2016-08-01 15:48:41" },
      "lastArrival": { "Value":"2016-08-01 19:13:10", "Time":"2016-08-01 19:13:10" },
      "lastDeparture": { "Value":"2016-08-01 17:45:10", "Time":"2016-08-01 17:45:10" },
      "lastDurAbsence": { "Value":"01:28:00", "Time":"2016-08-01 19:13:10" },
      "lastDurAbsence_cr": { "Value":"88", "Time":"2016-08-01 19:13:10" },
      "lastDurPresence": { "Value":"01:56:29", "Time":"2016-08-01 17:45:10" },
      "lastDurPresence_cr": { "Value":"116", "Time":"2016-08-01 17:45:10" },
      "lastLocation": { "Value":"undefined", "Time":"2016-08-01 17:45:10" },
      "lastMood": { "Value":"calm", "Time":"2016-08-01 17:45:10" },
      "lastState": { "Value":"gone", "Time":"2016-08-01 19:13:10" },
      "location": { "Value":"underway", "Time":"2016-08-01 17:45:10" },
      "mood": { "Value":"calm", "Time":"2016-08-01 19:13:10" },
      "presence": { "Value":"present", "Time":"2016-08-01 19:13:10" },
      "state": { "Value":"home", "Time":"2016-08-01 19:13:10" },
      "wayhome": { "Value":"0", "Time":"2016-08-01 15:48:41" }
    },
    "Attributes": {
      "alias": "Status",
      "devStateIcon": ".*home:user_available:absent .*absent:user_away:home .*gone:user_ext_away:home .*gotosleep:scene_toilet:asleep .*asleep:scene_sleeping:awoken .*awoken:scene_sleeping_alternat:home .*:user_unknown:home",
      "group": "Tim",
      "icon": "people_sensor",
      "room": "Residents",
      "rr_realname": "group",
      "sortby": "1",
      "webCmd": "state"
    }
  },
  {
    "Name":"sendmsg_kuechenlampe",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 disable:1,0 disabledForIntervals forwardReturnValue:1,0 readLog:1,0 showtime:1,0 addStateEvent:1,0 cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "#LuminoodleSchreibtisch set pushover1 msg 'Kuechenlampe geschaltet'",
      "NAME": "sendmsg_kuechenlampe",
      "NR": "32",
      "NTFY_ORDER": "50-sendmsg_kuechenlampe",
      "REGEXP": "#LuminoodleSchreibtisch",
      "STATE": "active",
      "TYPE": "notify"
    },
    "Readings": {      "state": { "Value":"active", "Time":"2016-10-09 15:58:07" }    },
    "Attributes": {      "group": "Pushover"    }
  },
  {
    "Name":"sysmon",
    "PossibleSets":"password interval_multipliers clean:noArg clear",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 filesystems network-interfaces user-defined disable:0,1 nonblocking:0,1 telnet-time-out user-fn2 user-fn telnet-prompt-regx telnet-login-prompt-regx exclude event-on-change-reading event-on-update-reading event-aggregator event-min-interval stateFormat:textField-long timestamp-on-change-reading cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "DEF": "1 1 1 10",
      "INTERVAL_BASE": "60",
      "INTERVAL_MULTIPLIERS": "1 1 1 10",
      "MODE": "local",
      "NAME": "sysmon",
      "NR": "124",
      "STATE": "Active",
      "TYPE": "SYSMON"
    },
    "Readings": {
      "cpu0_freq": { "Value":"600", "Time":"2016-11-23 23:51:36" },
      "cpu0_freq_stat": { "Value":"600.00 900.00 600.01", "Time":"2016-11-23 23:51:36" },
      "cpu0_idle_stat": { "Value":"14.75 100.00 97.85", "Time":"2016-11-23 23:51:36" },
      "cpu1_freq": { "Value":"600", "Time":"2016-11-23 23:51:36" },
      "cpu1_freq_stat": { "Value":"600.00 900.00 600.01", "Time":"2016-11-23 23:51:36" },
      "cpu1_idle_stat": { "Value":"0.00 100.00 98.16", "Time":"2016-11-23 23:51:36" },
      "cpu2_freq": { "Value":"600", "Time":"2016-11-23 23:51:36" },
      "cpu2_freq_stat": { "Value":"600.00 900.00 600.01", "Time":"2016-11-23 23:51:36" },
      "cpu2_idle_stat": { "Value":"0.00 100.00 98.84", "Time":"2016-11-23 23:51:36" },
      "cpu3_freq": { "Value":"600", "Time":"2016-11-23 23:51:36" },
      "cpu3_freq_stat": { "Value":"600.00 900.00 600.01", "Time":"2016-11-23 23:51:36" },
      "cpu3_idle_stat": { "Value":"0.00 100.00 99.06", "Time":"2016-11-23 23:51:36" },
      "cpu_bogomips": { "Value":"57.60", "Time":"2016-10-09 15:59:09" },
      "cpu_core_count": { "Value":"4", "Time":"2016-11-23 23:51:36" },
      "cpu_freq": { "Value":"600", "Time":"2016-11-23 23:51:36" },
      "cpu_freq_stat": { "Value":"600.00 900.00 600.01", "Time":"2016-11-23 23:51:36" },
      "cpu_idle_stat": { "Value":"48.19 99.86 98.49", "Time":"2016-11-23 23:51:36" },
      "cpu_model_name": { "Value":"ARMv7 Processor rev 5 (v7l)", "Time":"2016-10-09 15:59:09" },
      "cpu_temp": { "Value":"43.31", "Time":"2016-11-23 23:51:36" },
      "cpu_temp_avg": { "Value":"43.2", "Time":"2016-11-23 23:51:36" },
      "cpu_temp_stat": { "Value":"39.01 50.31 43.16", "Time":"2016-11-23 23:51:36" },
      "eth0": { "Value":"RX: 3253.83 MB, TX: 4005.00 MB, Total: 7258.83 MB", "Time":"2016-11-23 23:51:36" },
      "eth0_diff": { "Value":"RX: 0.04 MB, TX: 0.05 MB, Total: 0.09 MB", "Time":"2016-11-23 23:51:36" },
      "eth0_ip": { "Value":"192.168.192.37", "Time":"2016-11-23 23:51:36" },
      "eth0_rx": { "Value":"3411883486", "Time":"2016-11-23 23:51:36" },
      "eth0_speed": { "Value":"100", "Time":"2016-11-23 23:51:36" },
      "eth0_tx": { "Value":"4199544731", "Time":"2016-11-23 23:51:36" },
      "fhemstarttime": { "Value":"1476021499", "Time":"2016-11-23 23:51:36" },
      "fhemstarttime_text": { "Value":"09.10.2016 15:58:19", "Time":"2016-11-23 23:51:36" },
      "fhemuptime": { "Value":"3919997", "Time":"2016-11-23 23:51:36" },
      "fhemuptime_text": { "Value":"45 days, 08 hours, 53 minutes", "Time":"2016-11-23 23:51:36" },
      "fs_boot": { "Value":"Total: 63 MB, Used: 21 MB, 33 %, Available: 43 MB at /boot", "Time":"2016-11-23 23:50:36" },
      "fs_root": { "Value":"Total: 28892 MB, Used: 3632 MB, 14 %, Available: 24034 MB at /", "Time":"2016-11-23 23:50:36" },
      "fs_usb1": { "Value":"Total: 0 MB, Used: 0 MB, 0 %, Available: 0 MB at /media/usb1 (not available)", "Time":"2016-11-23 23:50:36" },
      "idletime": { "Value":"10691626 108.22 %", "Time":"2016-11-23 23:51:36" },
      "idletime_text": { "Value":"123 days, 17 hours, 53 minutes (108.22 %)", "Time":"2016-11-23 23:51:36" },
      "loadavg": { "Value":"0.00 0.11 0.16", "Time":"2016-11-23 23:51:36" },
      "perl_version": { "Value":"v5.20.2", "Time":"2016-10-09 15:59:09" },
      "ram": { "Value":"Total: 925.54 MB, Used: 159.81 MB, 17.27 %, Free: 765.73 MB", "Time":"2016-11-23 23:51:36" },
      "ram_used_stat": { "Value":"46.89 372.74 160.06", "Time":"2016-11-23 23:51:36" },
      "starttime": { "Value":"1470062301", "Time":"2016-11-23 23:51:36" },
      "starttime_text": { "Value":"01.08.2016 16:38:21", "Time":"2016-11-23 23:51:36" },
      "stat_cpu": { "Value":"10680284 87 7130652 3866820165 293480 0 1964199", "Time":"2016-11-23 23:51:36" },
      "stat_cpu0": { "Value":"5313701 0 1922981 915542845 210888 0 1954796", "Time":"2016-11-23 23:51:36" },
      "stat_cpu0_diff": { "Value":"126 0 16 5461 1 0 23", "Time":"2016-11-23 23:51:36" },
      "stat_cpu0_percent": { "Value":"2.24 0.00 0.28 97.05 0.02 0.00 0.41", "Time":"2016-11-23 23:51:36" },
      "stat_cpu0_text": { "Value":"user: 2.24 %, nice: 0.00 %, sys: 0.28 %, idle: 97.05 %, io: 0.02 %, irq: 0.00 %, sirq: 0.41 %", "Time":"2016-11-23 23:51:36" },
      "stat_cpu1": { "Value":"1822895 86 2156642 983343272 25746 0 4324", "Time":"2016-11-23 23:51:36" },
      "stat_cpu1_diff": { "Value":"5 0 18 5972 0 0 0", "Time":"2016-11-23 23:51:36" },
      "stat_cpu1_percent": { "Value":"0.08 0.00 0.30 99.62 0.00 0.00 0.00", "Time":"2016-11-23 23:51:36" },
      "stat_cpu1_text": { "Value":"user: 0.08 %, nice: 0.00 %, sys: 0.30 %, idle: 99.62 %, io: 0.00 %, irq: 0.00 %, sirq: 0.00 %", "Time":"2016-11-23 23:51:36" },
      "stat_cpu2": { "Value":"1971338 1 1256842 983756605 33920 0 2861", "Time":"2016-11-23 23:51:36" },
      "stat_cpu2_diff": { "Value":"1 0 3 5990 0 0 0", "Time":"2016-11-23 23:51:36" },
      "stat_cpu2_percent": { "Value":"0.02 0.00 0.05 99.93 0.00 0.00 0.00", "Time":"2016-11-23 23:51:36" },
      "stat_cpu2_text": { "Value":"user: 0.02 %, nice: 0.00 %, sys: 0.05 %, idle: 99.93 %, io: 0.00 %, irq: 0.00 %, sirq: 0.00 %", "Time":"2016-11-23 23:51:36" },
      "stat_cpu3": { "Value":"1572350 0 1794187 984177443 22926 0 2218", "Time":"2016-11-23 23:51:36" },
      "stat_cpu3_diff": { "Value":"4 0 12 5983 0 0 0", "Time":"2016-11-23 23:51:36" },
      "stat_cpu3_percent": { "Value":"0.07 0.00 0.20 99.73 0.00 0.00 0.00", "Time":"2016-11-23 23:51:36" },
      "stat_cpu3_text": { "Value":"user: 0.07 %, nice: 0.00 %, sys: 0.20 %, idle: 99.73 %, io: 0.00 %, irq: 0.00 %, sirq: 0.00 %", "Time":"2016-11-23 23:51:36" },
      "stat_cpu_diff": { "Value":"136 0 49 23406 1 0 23", "Time":"2016-11-23 23:51:36" },
      "stat_cpu_percent": { "Value":"0.58 0.00 0.21 99.11 0.00 0.00 0.10", "Time":"2016-11-23 23:51:36" },
      "stat_cpu_text": { "Value":"user: 0.58 %, nice: 0.00 %, sys: 0.21 %, idle: 99.11 %, io: 0.00 %, irq: 0.00 %, sirq: 0.10 %", "Time":"2016-11-23 23:51:36" },
      "swap": { "Value":"Total: 100.00 MB, Used: 0.00 MB,  0.00 %, Free: 100.00 MB", "Time":"2016-11-23 23:51:36" },
      "swap_used_stat": { "Value":"0.00 0.00 0.00", "Time":"2016-11-23 23:51:36" },
      "uptime": { "Value":"9879194", "Time":"2016-11-23 23:51:36" },
      "uptime_text": { "Value":"114 days, 08 hours, 13 minutes", "Time":"2016-11-23 23:51:36" },
      "wlan0": { "Value":"not available", "Time":"2016-11-23 23:51:36" },
      "wlan0_diff": { "Value":"not available", "Time":"2016-11-23 23:51:36" }
    },
    "Attributes": {
      "event-on-update-reading": "cpu_temp,cpu_temp_avg,cpu_freq,eth0_diff,loadavg,ram,fs_.*",
      "filesystems": "fs_boot:/boot,fs_root:/:Root,fs_usb1:/media/usb1:USB-Stick",
      "network-interfaces": "eth0:eth0:Ethernet,wlan0:wlan0:WiFi",
      "room": "FHEM"
    }
  },
  {
    "Name":"telnetPort",
    "PossibleSets":"",
    "PossibleAttrs":"alias comment:textField-long eventMap group room suppressReading userReadings:textField-long verbose:0,1,2,3,4,5 globalpassword password prompt allowedCommands allowfrom SSL connectTimeout connectInterval encoding:utf8,latin1 sslVersion cmdIcon devStateIcon devStateStyle genericDeviceType:switch,outlet,light,blind,speaker,thermostat,thermometer homebridgeMapping:textField-long icon sortby webCmd widgetOverride userattr",
    "Internals": {
      "CONNECTS": "65685",
      "DEF": "7072 global",
      "FD": "5",
      "NAME": "telnetPort",
      "NR": "3",
      "NTFY_ORDER": "50-telnetPort",
      "PORT": "7072",
      "STATE": "Initialized",
      "TYPE": "telnet"
    },
    "Readings": {    },
    "Attributes": {    }
  }  ],
  "totalResultsReturned":89
}

class SocketIO {
  constructor(url, protocol) {

  }

  emit(event, ...data) {
    console.log(arguments)
    console.log(event)
    let callback = data[data.length - 1]
    if(callback)
      callback(response)
  }

  connect() {
    return true
  }

  on(type, callback) {
    return true
  }
}

const IO = function ioConstructor(url) {
  return new SocketIO(url)
}

IO.connect = function ioConnect(url) {
  return IO(url)
}

export default IO
