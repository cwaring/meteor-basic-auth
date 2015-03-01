# Basic Auth
A simple way to protect your app with basic HTTP auth
```
meteor add kit:basic-auth
```

---

## Usage
Protection is enabled when you load your Meteor app with a `settings.json` file and the `basicAuth` key:
```json
// settings.json
{
  "basicAuth": {
    "username": "auth",
    "password": "pass"
  }
}
```
```bash
meteor --settings settings.json
```
---

[MIT license](http://opensource.org/licenses/MIT)