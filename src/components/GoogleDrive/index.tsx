import { useAppState } from "@/contexts";
import { useEffect } from "react";
import { google } from 'googleapis';
import { googleDriveConfig } from "@/constants/config";

const GoogleDrive: React.FC = () => {

    const { setAppState } = useAppState()

    const configure = async () => {
        const oauth2Client = new google.auth.OAuth2(
            googleDriveConfig.clientId,
            googleDriveConfig.clientSecret,
            googleDriveConfig.redirectUrl
        );

        await oauth2Client.setCredentials({
            refresh_token: googleDriveConfig.refreshToken
        });

        const drive = await google.drive({
            version: 'v3',
            auth: oauth2Client
        });

        setAppState((prevState) => ({
            ...prevState,
            drive: drive,
        }));
    }

    useEffect(() => {
        configure()
    }, [])

    return (
        <></>
    )
}

export default GoogleDrive