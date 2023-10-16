import React from 'react'
import BodyComponent from '../../components/bodyComponent'
import { DarkMode } from '../../../services/darkMode';
import { useState } from 'react';
import { useEffect } from 'react';
import { SettingApi } from '../../../services/generalApis/settings';

export const Settings = ({ getThemeColor, isDarkMode }) => {
    const { setDarkMode, getDarkMode } = DarkMode();
    const darkMode = getDarkMode();

    const { postSetting } = SettingApi();

    const [getSettingData, setSettingData] = useState({
        pushNotify: false,
        emailNotify: false,
        themeNotify: false,
        soundNotify: false
    })
    const getInput = (e) => {
        const { name, checked } = e.target;
        setSettingData({ ...getSettingData, [name]: checked })
    }
    useEffect(() => {

        console.log(getSettingData, 'settings Response');

        const formData = new FormData();
        formData.set('desktopPushNotification', getSettingData.pushNotify);
        formData.set('emailNotification', getSettingData.emailNotify);
        formData.set('darkTheme', getSettingData.themeNotify);
        formData.set('soundNotification', getSettingData.soundNotify);
        console.log(formData, 'settingDataa');

        postSetting(formData).then((res) => {
            console.log(res, 'response');
        }).catch((res) => {
            console.log(res, 'error');
        })
    }, [getSettingData])

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
                                <h6>
                                    Desktop Push Notification
                                </h6>
                            </div>
                            <div className="mainListPara">
                                Receive push notification on mentions, comments, alerts, edit changes, supply and target meet
                            </div>
                        </div>
                        <div className="mainHeadingWrapper">
                            <label className="switch">
                                <input type="checkbox" name='pushNotify' onChange={getInput} checked={getSettingData.pushNotify} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="mainListComp settingsListComp">
                        <div className="mainHeadingWrapper">
                            <div className="mainListHeading">
                                <h6>
                                    Email Notification
                                </h6>
                            </div>
                            <div className="mainListPara">
                                Receive push notification on mentions, comments, alerts, edit changes, supply and target meet
                            </div>
                        </div>
                        <div className="mainHeadingWrapper">
                            <label className="switch">
                                <input type="checkbox" name='emailNotify' onChange={getInput} checked={getSettingData.emailNotify} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="mainListComp settingsListComp">
                        <div className="mainHeadingWrapper">
                            <div className="mainListHeading">
                                <h6>
                                    Dark Theme
                                </h6>
                            </div>
                            <div className="mainListPara">
                                use the system settings to enable dark theme
                            </div>
                        </div>

                        <div className="mainHeadingWrapper">
                            <label className="switch">
                                <input type="checkbox" name='themeNotify' checked={darkMode || getSettingData.themeNotify} onChange={(e) => { getThemeColor(e.target.checked ? true : false), setDarkMode(e.target.checked ? true : false), getInput }} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="mainListComp settingsListComp">
                        <div className="mainHeadingWrapper">
                            <div className="mainListHeading">
                                <h6>
                                    Sound Notification
                                </h6>
                            </div>
                            <div className="mainListPara">
                                Enable sound notification on mentions, comments, alerts, edit changes, supply and target meet
                            </div>
                        </div>
                        <div className="mainHeadingWrapper">
                            <label className="switch">
                                <input type="checkbox" name='soundNotify' checked={getSettingData.soundNotify} onChange={getInput} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>

                </div>

            </BodyComponent>
        </React.Fragment>
    )
}
