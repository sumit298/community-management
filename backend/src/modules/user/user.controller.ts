import { Body, Controller, Param, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    // @Post('paginate');
    // async paginate(@Req() req, @Res() res, @Body() postData){
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }

    @Post('get-one')
    async getOne(@Req() req, @Res() res, @Param('id') id: string){
        try {
            const user = await this.userService.findOne(id);
            if (user===undefined) {
                throw new Error("Record not found");
            }
            // const formattedUser = 
        } catch (error) {
            
        }
    }

    @Post('create')
    async create(@Req() req, @Res() res, @Body() postData){
        try {
            
        } catch (error) {
            
        }
    }


}
