_tauri_plugin_functions = ["makeConfig"]

from pathlib import Path
import json

configPath = Path.home() / ".config" / "BgManager" / "config.json"

def makeConfig():
  with open(configPath) as file:
    json.dump({}, file)

def getConfig():
  if not configPath.exists():
    makeConfig()

  with open(configPath) as file:
    return json.load(file)

def writeConfig(data):
  with open(configPath) as file:
    json.dump(data, file)