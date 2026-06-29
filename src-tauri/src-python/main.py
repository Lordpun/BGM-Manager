_tauri_plugin_functions = ["sortCustomCommands"]

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

# For getting only commands in the config with custom type
def sortCustomCommands():
  data = getConfig()

  sortedData = {}
  for i in [list(data.keys())]:
    if data[i].get("type") == "custom":
      sortedData[i] = data[i]

  return sortedData