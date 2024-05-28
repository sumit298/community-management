/**
 * @api {post} /user/login  Login
 * @apiName Login User
 * @apiGroup User
 * @apiSampleRequest off
 *
 * @apiParam {String}  email       Required
 * @apiParam {String}  password    Required
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": {
        "id": USER_ID,
        "role_id": USER_ROLE_ID,
        "active_session_id": USER_SESSION_ID,
        "accessToken": ACCESS_TOKEN_STRING,
        "is_profile_completed": BOOL_PROFILE_COMPLETE_OR_NOT
    },
    }
 */
/**
 * @api {post} /user/social-register  Social Register
 * @apiName Create social-register User
 * @apiGroup User
 * @apiSampleRequest off
 * 
 * @apiParam {Integer} role_id             Required.
 * @apiParam {String}  name                Required.
 * @apiParam {String}  email               Required.
 * @apiParam {String}  org_title           Required.
 * @apiParam {String}  google_signup_id    
 * @apiParam {String}  facebook_signup_id   
 * @apiParam {String}  twitter_signup_id   
 * @apiParam {String}  lang               
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": null
    }
 */ 
/**
 * @api {post} /user/register  Register
 * @apiName Create Register User
 * @apiGroup User
 * @apiSampleRequest off
 * 
 * @apiParam {Integer} role_id         Required.
 * @apiParam {String}  name            Required.
 * @apiParam {String}  email           Required.
 * @apiParam {String}  password        Required
 * @apiParam {String}  org_title       Required.
 * @apiParam {String}  lang           
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": null
    }
 */ 
/**
 * @api {post} /user/paginateList PaginateList 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
 * @apiName GetUserList
 * @apiGroup User
 * @apiSampleRequest off
 * 
 * @apiParam {Integer} page     
 * @apiParam {Integer} limit    
 * @apiParam {String}  order_by 
 * @apiParam {String}  order   
 * @apiParam {String}  lang    
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
     "statusCode": 200,
    "success": 1,
    "message": "Éxito",
    "error": 0,
    "data": {
        "list": [
            {
            "id": 75,
            "name": "User20 Vivo",
            "role_id": 2,
            "org_id": 74,
            "department_id": 16,
            "location_id": 8,
            "email": "user20.vivo@mailinator.com",
            "password": "21232f297a57a5a743894a0e4a801fc3",
            "profile_image": "http://localhost:3000/public/images/users/photo_409ce3bb961eb5c9735a5f16fa8f779a.jpg",
            "verification_token": "JwfUFr6b0cT1gCO",
            "forgot_password_token": null,
            "is_email_verified": 0,
            "google_signup_id": null,
            "facebook_signup_id": null,
            "twitter_signup_id": null,
            "created_by": 52,
            "updated_by": 52,
            "created": "2021-07-30T12:04:43.461Z",
            "updated": "2021-07-30T12:04:43.461Z",
            "status": 1,
            "organizationDetails": {
                "id": 74,
                "title": "Meta Org",
                "description": null,
                "file": null,
                "code": "976126",
                "address": null,
                "created_by": null,
                "updated_by": null,
                "created": "2021-07-27T06:40:43.403Z",
                "updated": "2021-07-27T06:40:43.403Z",
                "status": 1
            },
            "roleDetails": {
                "id": 2,
                "title": "orgAdmin",
                "org_id": 1,
                "created_by": null,
                "updated_by": null,
                "created": "2021-07-10T06:45:34.638Z",
                "updated": "2021-07-10T06:45:34.638Z",
                "status": 1
            },
            "departmentDetails": {
                "id": 16,
                "title": "Marketing",
                "description": "great department",
                "org_id": 74,
                "created_by": 76,
                "updated_by": 76,
                "created": "2021-07-27T06:55:31.567Z",
                "updated": "2021-07-31T04:37:49.709Z",
                "status": 1
            },
            "locationDetails": {
                "id": 8,
                "title": "Meta Location One",
                "description": "Desc",
                "country_id": 1,
                "state_id": 1,
                "city_id": 1,
                "org_id": 74,
                "created_by": 51,
                "updated_by": 51,
                "created": "2021-07-27T06:54:11.863Z",
                "updated": "2021-07-27T06:54:11.863Z",
                "status": 1
            }
        }
        ],
        "total": 4,
        "pages": 1,
        "page": "1"
    }
}
 */ 
/**
 * @api {post} /user/getUser GetOne 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
 * @apiName GetUser
 * @apiGroup User
 * @apiSampleRequest off
 * 
 * @apiParam {Integer} id     Required
 * @apiParam {String}  lang    
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": {
        "id": 65,
        "name": "vivo Admin",
        "role_id": 2,
        "org_id": 138,
        "department_id": null,
        "location_id": null,
        "email": "adm.vivo@mailinator.com",
        "password": "21232f297a57a5a743894a0e4a801fc3",
        "profile_image": "http://localhost:3000/public/images/users/photo_698716bc5bf3785b85fc549419c944da.jpg",
        "verification_token": "0",
        "forgot_password_token": null,
        "is_email_verified": 1,
        "google_signup_id": null,
        "facebook_signup_id": null,
        "twitter_signup_id": null,
        "created_by": null,
        "updated_by": null,
        "created": "2021-07-30T09:33:49.364Z",
        "updated": "2021-07-30T09:46:29.640Z",
        "status": 1
    }
}
 */ 
/**
 * @api {post} /user/verify-email  Verify Email
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
 * @apiName Verify Email User
 * @apiGroup User
 * @apiSampleRequest off
 * 
 * @apiParam {String}  token       Required    
 * @apiParam {String}  email       Required    
 * @apiParam {String}  lang            
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": null
    }
 */
/**
 * @api {post} /user/change-password  Change Password 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
 * @apiName Change Password User
 * @apiGroup User
 * @apiSampleRequest off
 * 
 * @apiParam {String}  old_password       Required   
 * @apiParam {String}  new_password       Required
 * @apiParam {String}  confirm_password   Required
 * @apiParam {String}  lang              
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": null
    }
 */ 
/**
 * @api {post} /user/update-profile Update Profile
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
* @apiName User Update Profile
* @apiGroup User
* @apiSampleRequest off
* 
* @apiParam {String}  email           Required.
* @apiParam {String}  name            Required.
* @apiParam {String}  profile_image   
* @apiParam {String}  lang            
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*       {
   "statusCode": 200,
   "success": 1,
   "message": "Success",
   "error": 0,
   "data": null
    }
*/
/**
 * @api {post} /user/forgot-password   Forgot Password
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
 * @apiName Forgot Password User
 * @apiGroup User
 * @apiSampleRequest off
 * 
 * @apiParam {String}  email   Required
 * @apiParam {String}  lang   
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "statusCode": 200,
    "success": 1,
    "message": "Password reset url sent to user email account",
    "error": 0,
    "data": null
    }
 */ 
/**
 * @api {post} /user/reset-password  Reset Password
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
 * @apiName Reset Password User
 * @apiGroup User
 * @apiSampleRequest off
 * 
 * @apiParam {String}  token               Required
 * @apiParam {String}  password            Required
 * @apiParam {String}  confirm_password    Required
 * @apiParam {String}  lang               
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": null
    }
 */ 
/**
 * @api {post} /user/create  Create 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
 * @apiName Create User
 * @apiGroup User
 * @apiSampleRequest off
 * 
 * @apiParam {Integer} role_id         Required.
 * @apiParam {Integer} org_id          Required.
 * @apiParam {String}  name            Required.
 * @apiParam {String}  email           Required.
 * @apiParam {String}  password        Required
 * @apiParam {Integer} department_id   Required.
 * @apiParam {Integer} location_id     Required.
 * @apiParam {String}  profile_image   
 * @apiParam {String}  status          
 * @apiParam {String}  lang            
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": null
    }
 */ 
/**
 * @api {post} /user/update  Update 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
 * @apiName Update User
 * @apiGroup User
 * @apiSampleRequest off
 *  
 * @apiParam {Integer} id              Required
 * @apiParam {Integer} role_id         Required.
 * @apiParam {Integer} org_id          Required.
 * @apiParam {String}  name            Required.
 * @apiParam {String}  email           Required.
 * @apiParam {String}  password        Required
 * @apiParam {Integer} department_id   Required.
 * @apiParam {Integer} location_id     Required.
 * @apiParam {String}  profile_image   
 * @apiParam {String}  status         
 * @apiParam {String}  lang            
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": null
    }
 */ 
/**
 * @api {post} /user/delete  Delete 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer Accesstoken"
 *     }
 * @apiName Delete User
 * @apiGroup User
 * @apiSampleRequest off
 *  
 * @apiParam {Integer} id     Required  
 * @apiParam {String}  lang        
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
    "statusCode": 200,
    "success": 1,
    "message": "Success",
    "error": 0,
    "data": null
    }
 */ 