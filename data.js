var APP_DATA = {
  "scenes": [
    {
      "id": "0-birou",
      "name": "birou",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.891122888594893,
        "pitch": 0.11843235954228071,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.43256914599862917,
          "pitch": 0.06804936760492453,
          "rotation": 0,
          "target": "1-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hol",
      "name": "hol",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7063172167816711,
          "pitch": 0.050060414100938644,
          "rotation": 0,
          "target": "0-birou"
        },
        {
          "yaw": -0.0988194290643527,
          "pitch": 0.09492970360545527,
          "rotation": 0,
          "target": "2-dormitor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dormitor",
      "name": "dormitor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.334872978146315,
          "pitch": 0.14691830451176635,
          "rotation": 0,
          "target": "1-hol"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2526401177704116,
          "pitch": 0.24834112590821533,
          "title": "televizor",
          "text": "Text"
        },
        {
          "yaw": 0.5332664886254683,
          "pitch": -0.07928564114429726,
          "title": "vedere palas",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
