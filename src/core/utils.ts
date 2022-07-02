
import { AxiosRequestConfig } from 'axios';
import { environment } from './../environments/environment';



export default class Utils {
    static getAxiosConfigForAppJson(doNotShowSpinner = false, isAxiosConfig = false, doNotShowError = false): AxiosRequestConfig {
        const config: any = isAxiosConfig ? environment.axiosConfig : environment.headersJson;
        config.headers = {
            ...config.headers
        };

        if (doNotShowSpinner) {
            config.headers['Do-Not-Show-Spinner'] = true;
        }

        if (doNotShowError) {
            config.headers['Do-Not-Show-Error'] = true;
        }

        return config;
    }
}