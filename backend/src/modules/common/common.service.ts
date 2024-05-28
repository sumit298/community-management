import { Injectable } from '@nestjs/common';
import path from 'path';
import { appConstant } from 'src/constant/appConstant';
import { errorConstant } from 'src/constant/errorConstant';
import { join } from 'path';
import {plainToInstance} from 'class-transformer'

@Injectable()
export class CommonService {
  async fileUpload(image_name, save_file_name, req) {
    let image_path = `./${appConstant.UPLOAD_PATH}/${save_file_name}/`;
    let image_folder_name = `/images/${save_file_name}/`;
    let fullUrl = req.protocol + '://' + req.get('host');
    let image = req.files && image_name ? image_name : [];
    if (typeof image.length === 'undefined') {
      let fileNamePhoto = 'photo_' + image.md5 + path.extname(image.name);
      let newpath = image_path + fileNamePhoto;
      await image.mv(newpath);
      let image_url = fullUrl + image_folder_name + fileNamePhoto;
      return image_url;
    }
  }
  getPaginationVar(pageNo, recordPerPage = appConstant.RECORD_PER_PAGE) {
    if (pageNo < 1) {
      pageNo = 1;
    }
    return {
      page: Number(pageNo),
      take: recordPerPage,
      skip: (pageNo - 1) * recordPerPage,
    };
  }

  formatToDto(dto, obj) {
    return plainToInstance(dto, obj, {
      excludeExtraneousValues: true,
      enableImplicitConversion: true,
      enableCircularCheck: true,
    });
  }

  checkAllowedRole(roleId, rolesArray) {
    if (!rolesArray.includes(roleId)) {
      throw Error(errorConstant.FORBIDDEN_ACCESS);
    }
  }

  async uploadFileToLocal(fileObj, folder = 'temp') {
    let saveaAsFileName = Date.now() + fileObj.name.replace(/[^a-zA-Z.]/g, '');
    let filePath = `/upload/${folder || 'temp'}/${saveaAsFileName}`;

    await fileObj.mv(
      join(
        process.cwd(),
        `${appConstant.PUBLIC_PATH.replace('.', '')}/${filePath}`,
      ),
    );
    return {
      title: fileObj.name,
      file_name: saveaAsFileName,
      file_url: `${appConstant.BASE_URL}${filePath}`,
      file_path: `${appConstant.PUBLIC_PATH}${filePath}`,
      full_path: join(
        process.cwd(),
        `${appConstant.PUBLIC_PATH.replace('.', '')}/${filePath}`,
      ),
      extension: fileObj.name.split('.').pop().toLowerCase(),
      size_in_bytes: fileObj.size,
    };
  }
}
