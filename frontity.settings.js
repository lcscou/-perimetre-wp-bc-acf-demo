const settings = {
  "name": "perimetre-wp-bc-acf-demo",
  "state": {
    "frontity": {
      "url": "https://wpbcdemo.wpengine.com",
      "title": "Périmètre",
      "description": "Testing Frontity + Bigcommerce + ACF + WPML"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "ACF",
              "testing-frontity"
            ]

          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wpbcdemo.wpengine.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
