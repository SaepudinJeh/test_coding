import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  convert(args: string) : string {
    const checkString = (str: string): any => {
      for (let i = 0; i < str.length; i++) {
        if (str[i] == "0" || str[i] == "1") {
          return parseInt(args, 2).toString()
        } else {
          return parseInt(args).toString(2)
        }
      }
    }
    return checkString(args)
  }
}
