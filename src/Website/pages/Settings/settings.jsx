/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import BodyComponent from "../../components/bodyComponent";
import { DarkMode } from "../../../services/darkMode";
import { useState } from "react";
import { useEffect } from "react";
import { SettingApi } from "../../../services/generalApis/settings";

export const Settings = ({ getThemeColor, isDarkMode }) => {
  const { setDarkMode, getDarkMode } = DarkMode();
  const darkMode = getDarkMode();

  const { postSetting, getSetting } = SettingApi();

  const [settings, setSettings] = useState(null);

  const getSettings = async () => {
    try {
      const response = await getSetting();
    //   console.log("get", response.data.data);
      setSettings(response.data.data);
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

//   const createDefaultSettings = async () => {
//     try {
//       const defaultSettings = {
//         desktopPushNotification: false,
//         emailNotification: false,
//         darkTheme: false,
//         soundNotification: false,
//       };

//       const response = await postSetting(defaultSettings);
//       console.log("post", response.data);
//       setSettings(response.data.data);
//     } catch (error) {
//       console.error("Error creating default settings:", error);
//     }
//   };

//   useEffect(() => {
//     if (settings === null) {
//       // Get settings if they are null
//       getSettings();
//     }
//   }, [settings]);

  const handleSettingChange = async (settingName, value) => {
    const updatedSettings = { ...settings, [settingName]: value };
    setSettings(updatedSettings);

    try {
      const response = await postSetting(updatedSettings);
    //   console.log("put", response.data);
      getSettings()
    } 
    catch (error) {
      console.error(`Error updating ${settingName}:`, error);
    }
  };
  useEffect(() => {
    getSettings();
  }, []);

  return (
    <React.Fragment>
      <BodyComponent>
        <div className="notificationComponent">
          <div className="headingMainCon">
            <h3>Settings</h3>
          </div>
          <div className="mainListComp settingsListComp">
            <div className="mainHeadingWrapper">
              <div className="mainListHeading">
                <h6>Desktop Push Notification</h6>
              </div>
              <div className="mainListPara">
                Receive push notification on mentions, comments, alerts, edit
                changes, supply and target meet
              </div>
            </div>
            <div className="mainHeadingWrapper">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings?.desktopPushNotification || false}
                  onChange={(e) =>
                    handleSettingChange(
                      "desktopPushNotification",
                      e.target.checked
                    )
                  }
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="mainListComp settingsListComp">
            <div className="mainHeadingWrapper">
              <div className="mainListHeading">
                <h6>Email Notification</h6>
              </div>
              <div className="mainListPara">
                Receive push notification on mentions, comments, alerts, edit
                changes, supply and target meet
              </div>
            </div>
            <div className="mainHeadingWrapper">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings?.emailNotification || false}
                  onChange={(e) =>
                    handleSettingChange("emailNotification", e.target.checked)
                  }
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="mainListComp settingsListComp">
            <div className="mainHeadingWrapper">
              <div className="mainListHeading">
                <h6>Dark Theme</h6>
              </div>
              <div className="mainListPara">
                use the system settings to enable dark theme
              </div>
            </div>

            <div className="mainHeadingWrapper">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings?.darkTheme || false}
                  onChange={(e) =>
                    handleSettingChange("darkTheme", e.target.checked)
                  }
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="mainListComp settingsListComp">
            <div className="mainHeadingWrapper">
              <div className="mainListHeading">
                <h6>Sound Notification</h6>
              </div>
              <div className="mainListPara">
                Enable sound notification on mentions, comments, alerts, edit
                changes, supply and target meet
              </div>
            </div>
            <div className="mainHeadingWrapper">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings?.soundNotification || false}
                  onChange={(e) =>
                    handleSettingChange("soundNotification", e.target.checked)
                  }
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </BodyComponent>
    </React.Fragment>
  );
};
