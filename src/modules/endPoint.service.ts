// import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
// import { map } from 'rxjs/operators';
// import { DbService } from '../shared';
@Injectable()
export class EndService {
    async getAggregate(address: string): Promise<string> {
        const url = "https://api.covalenthq.com/v1/1/address/" + address + "/balances_v2/?key=" + "ckey_e91b33fb9580424da35348a837f";
        const response: any = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                "Accept-Encoding": "gzip,deflate,compress"
            }
        });
        console.log(response.data["data"])
        return response.data;
    }
}
