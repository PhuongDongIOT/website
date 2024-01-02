import { Api } from '~helpers/https/apis';
import { apiConfigCommon } from '~configs/http.config';
import { env } from '~configs/config';

class ApiComon {
    apis: Api = new Api();
    pathApis: string = env.API_BASE_URL
    config: any = apiConfigCommon;


    async postCommon<T>(path: string, data: T & object):Promise<any> {
        const response: any = await this.apis.post(this.pathApis + path, data)
        return response;
    } 
}

const apiComon: ApiComon = new ApiComon();

export {
    apiComon
}
