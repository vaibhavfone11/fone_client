export enum MASTER {
    ROLE_GET = '/master/role',
    PROJECT_TYPE_GET = '/master/projecttype',
    DRAWING_CATEGORY_GET = '/master/drawingcategory',
    DRAWING_TYPE_GET = '/master/drawingtype',
    VENDOR_TYPE_GET = '/master/vendortype',
    TASK_CATEGORY_GET = '/master/taskcategory',
    TASK_PRIORITY_GET = '/master/taskpriority',
    TASK_WORKTYPE_GET = '/master/taskworktype',
    TASK_STATUS_GET = '/master/taskstatus',
    RESOURCE_UNIT_GET = '/master/resourceunit',
    RESOURCE_CATEGORY_GET = '/master/resourcecategory',
    DESIGNATION_GET = '/master/designation',
    LABOR_TYPE_GET = '/master/labourtype',
    MACHINARY_TYPE_GET = '/master/machinarytype',
    BILLING_CYCLE_TYPE_GET = '/master/billingcycletype',
    SCHEDULE_COST_IMPECT_GET = '/master/schedulecostimpect',
    BALL_IN_COURT_GET = '/master/ballincourt',
    TASK_PREDECESSOR_TYPE_GET = '/master/taskpredecessortype',
    CURRENCY_TYPE_GET = '/master/currency',
    MEMBER_TYPE_GET = '/master/membertype',
    GET_POSTCODE_DATA = '/master/postcode',
    // GET_LATITUDE_LONGITUDE = '/master/latitudelongitude',
    GET_COUNTRY = '/master/country',
}

export enum ROLE {
    USERS_AUTHENTICATE = '/user/authenticate',
    CREATE = '/role/create',
    LIST_ALL_ROLE_GET = '/role/all',
    LIST_ALL_ROLE_BY_COMPANY = '/role/company/all/',
    LIST_ARCHIVE_ROLES_GET = '/role/archive',
    ARCHIVE_PUT = '/role/archive',
    RESTORE_PUT = '/role/restore',
    UPDATE_PUT = '/role/update',
    GET_ID = '/role/',
    LIST_ALL_MENU_GET = '/user/menu',
    USER_COMPANY = '/user/usercompany',
}

export enum ROLEPERMISSION {
    GET_BY_ROLEID = '/rolepermission/roleid/',
}

export enum PERMISSION {
    GET_ALL = '/permission/all/',
}

export enum ROLEPERMISSION {
    CHECK_PERMISSION_TEMPLATE = '/rolepermission/checkPermissionTemplate/',
    GET_ALL_BY_ROLE_ID = '/rolepermission/roleid/',
    ADD_ROLE_PERMISSION = '/rolepermission/create/',
    UPDATE_ROLE_PERMISSION = '/rolepermission/update/',
    DELETE_ROLE_PERMISSION = '/rolepermission/all/delete/',
}

export enum PROJECTPERMISSION {
    GET_ALL_BY_ROLE_ID_AND_PROJECT_ID = '/projectpermission/roleid/projectid/',
    ADD_PROJECT_PERMISSION = '/projectpermission/create/',
    UPDATE_PROJECT_PERMISSION = '/projectpermission/update/',
    DELETE_PROJECT_PERMISSION = '/projectpermission/all/delete/',
    CHECK_PROJECT_PERMISSION_TEMPLATE = '/projectpermission/checkProjectPermissionTemplate/company/role/',
    ADD_PROJECT_PERMISSION_BY_ROLE = '/projectpermission/project/premission/add/',
}

export enum USERS {
    USERS_AUTHENTICATE = '/user/authenticate',
    USERS_REGISTRATION = '/user/registration',
    LIST_ALL_USERS_GET = '/user/all',
    LIST_ARCHIVE_USERS_GET = '/user/archive',
    ARCHIVE_USERS_PUT = '/user/archive',
    RESTORE_USERS_PUT = '/user/restore',
    UPDATE_USERS_PUT = '/user/update',
    UPDATE_USERS_PROFILE_PUT = '/user/profile/update',
    UPDATE_PASS = '/user/updatepass',
    USERS_GET_ID = '/user/',
    USERS_PROFILE = '/user/profile/',
    LIST_ALL_MENU_GET = '/permission/all',
    USER_COMPANY = '/user/usercompany',
    LIST_ALL_BY_COMPANY_GET = '/user/allIds/',
    LIST_ALL_USERS_BY_COMPANY = '/user/all/company/',
    LIST_ALL_USERS_BY_PROJECT = '/user/all/project/',
    LIST_ARCHIVE_USERS_BY_COMPANY = '/user/archive/company/',
    LIST_ARCHIVE_USERS_BY_PROJECT = '/user/archive/project/',
    USER_VERIFY = '/user/verify',
    SEND_USER_VERIFICATION_MAIL = '/user/verification/email',
}

export enum PROJECTS {
    CREATE_PROJECT_POST = '/project/add',
    LIST_ALL_PROJECTS = '/project/all',
    LIST_ALL_PROJECTS_COMPANY = '/project/all/company',
    LIST_ARCHIVE_PROJECTS_GET = '/project/archived/',
    ARCHIVE_PROJECTS_PUT = '/project/archive',
    RESTORE_PROJECTS_PUT = '/project/restore',
    PROJECT_OPTION = '/project/allIds/',
    USRS_PROJECT_OPTION = '/project/option/allIds/user/',
    USRS_PROJECTS = '/project/allIds/user/',
    UPDATE_PROJECT_PUT = '/project/update',
    UPDATE_EXPIRY_DATE = '/project/update/expirydate',
    PROJECT_GET_ID = '/project/',
    COMPANY_BY_PROJECT_ID = '/project/company/project/',
    DRAWING_BY_PROJECTID = '/drawing/all/project/',
}

export enum COMPANY {
    COMPANY_OPTION = '/company/allIds',
    CREATE_COMPANY_POST = '/company/add',
    LIST_ALL_COMPANY = '/company/all',
    LIST_ALL_COMPANY_PARENT = '/company/parent/',
    LIST_ARCHIVE_COMPANY_GET = '/company/archived',
    LIST_ARCHIVE_COMPANY_PARENT = '/company/archived/parent/',
    ARCHIVE_COMPANY_PUT = '/company/archive',
    RESTORE_COMPANY_PUT = '/company/restore',
    UPDATE_COMPANY_PUT = '/company/update',
    COMPANY_GET_ID = '/company/',
}

export enum DRAWING {
    DRAWING_ADD = '/drawing/add',
    DRAWING_CHECK_VERSION = '/drawing/check/version/',
    DRAWING_UPLOAD = '/drawing/pdf/upload',
    DRAWING_PDF_BY_ID = '/drawing/pdf',
    GET_ALL_DRAWING_VERSIONS = '/drawing/pdf/all/drawingversions/',
    TEST_DRAWING_PDF_BY_ID = '/drawing/test/pdf',
    UPLOAD_MULTI_DRAWING = '/drawing/multypdf/upload/',
    UPDATE_DRAWINGS = '/drawing/update/drawingversion/',
    SAVE_DRAWINGS = '/drawing/save/drawings/',
    GET_UPLOAD_PROGRESS = '/drawing/multypdf/status/',
    GET_PENDING_PDF_SHEETS = '/drawing/pdf/all/pending/',
    CLEAR_PDF_STATUS = '/drawing/multypdf/status/clear/',
    DRAWING_BY_ID = '/drawing/',
    DRAWING_BY_PROJECTID = '/drawing/all/project/',
    DRAWING_FOLDERS_BY_PROJECTID = '/drawing/folder/all/project/',
    DRAWING_VERSION_BY_ID = '/drawing/pdf/drawingversion/',
    LIST_ARCHIVE_DRAWING = '/drawing/archived/project',
    GET_REVISION_ARCHIVE_ALERT = '/drawing/version/archive/alert/',
    ARCHIVE_DRAWING = '/drawing/archive',
    ARCHIVE_VERSION = '/drawing/archive/version',
    RESTORE_DRAWING = '/drawing/restore',
    ADD_ANNOTATIONS = '/drawing/add/drawingshape/',
    GET_ALL_ANNOTATIONS = '/drawing/all/drawingshape/',
    UPDATE_FOLDER_PATH = '/drawing/update/folderpath/',
}

export enum VENDOR {
    CREATE_VENDOR_POST = '/vendor/add',
    LIST_ALL_VENDOR = '/vendor/all',
    LIST_ALL_VENDOR_COMPANY = '/vendor/all/company',
    LIST_ARCHIVE_VENDOR_GET = '/vendor/archived/company/',
    ARCHIVE_VENDOR_PUT = '/vendor/archive',
    RESTORE_VENDOR_PUT = '/vendor/restore',
    VENDOR_OPTION = '/vendor/allIds/',
    UPDATE_VENDOR_PUT = '/vendor/update',
    VENDOR_GET_ID = '/vendor/',
}

export enum TASK {
    GET_TASK_OPTIONS = '/task/options/byproject/',
    GET_RFI_BY_ID = '/task/taskrfi/',
    CREATE_TASK_POST = '/task/create',
    CREATE_TASK_DPR = '/task/dpr/create',
    CREATE_TASK_REQUISITION = '/task/requisition/create',
    LIST_ALL_TASKS = '/task/all',
    LIST_ALL_TASKS_PROJECT = '/task/all/project',
    LIST_ALL_TASKS_BOARD_PROJECT = '/task/board/project',
    LIST_ARCHIVE_TASKS_GET = '/task/archived/project/',
    ARCHIVE_TASKS_PUT = '/task/archive',
    RESTORE_TASKS_PUT = '/task/restore',
    TASK_OPTION = '/task/options/byproject/',
    UPDATE_TASK_PUT = '/task/update',
    TASK_GET_ID = '/task/',
    ADD_POSITION_TASK = '/task/addposition',
    LIST_ALL_TASKS_DRAWING = '/task/all/drawing/',
    UPDATE_TASK_ASSIGNEE = '/task/update/assignee',
    UPDATE_TASK_STATUS = '/task/update/status',
    TASK_HISTORY_GET = '/task/history/task/',
    TASK_DPR_GET = '/task/all/dpr/task/',
    TASK_REQUISITION_GET = '/task/all/requisition/task/',
    TASK_ACTIVITY_GET = '/task/all/activity/project/',
    CREATE_ACTIVITY_POST = '/task/activity/create',
    ADD_TASK_CHECKLIST = '/task/checklist/create',
    UPDATE_TASK_CHECKLIST = '/task/checklist/request/update/',
    REQUEST_TASK_CHECKLIST = '/task/checklist/request',
    GET_TASK_CHECKLIST = '/task/checklist/',
    ADD_TASK_RFI = '/task/taskrfi/create',
    ADD_TASK_RFI_HISTORY = '/task/taskrfihistory/create',
    GET_TASK_RFI_BY_TASK_ID = '/task/all/taskrfi/',
    GET_TASK_RFI_HISTORY_BY_RFI_ID = '/task/taskrfi/all/history/',
    ADD_TASK_MESSAGE = '/task/message/create',
    GET_INSPECTION_REQUESTS_BY_TASK = '/task/taskchecklist/requested/',
    GET_INSPECTION_REQUESTED_BY_ID = '/task/taskchecklist/',
    GET_ALL_RFI = '/task/all/taskrfi/',
    DRAFT_REQUEST_INFO = '/task/taskrfi/create/draft',
    ADD_RFI_ATTACHMENTS = '/task/taskrfi/add/attachment',
    ADD_RFI_HISTORY_ATTACHMENTS = '/task/taskrfihistory/add/attachment',
    UPDATE_RFI_STATUS = '/task/taskrfi/update/status',
    UPDATE_REQUEST_INFO = '/task/taskrfi/update',
    PUBLISH_REQUEST_INFO = '/task/taskrfi/create/publish',
    GET_TASK_CHECKLIST_BY_TASK_ID = '/task/checklist/bytask/',
    GET_TASK_BY_ID = '/task/',
    GET_INSPECTION_REQUESTS_BY_PROJECT = '/task/taskchecklist/project/requested/',
    UPDATE_TASK_CHECKLIST_ACTIVITY = '/task/checklist/activity/update/',
    GET_REQ_CHCKLIST_ACTIVITY = '/task/checklist/activity/bytask/',
    GET_REQ_CHCKLIST_ACTIVITY_HISTORY = '/task/checklistactivity/requested/',
    UPDATE_INSPECTION_STATUS = '/task/checklist/update/status/',
    ARCHIVE_INSPECTION_PUT = '/task/inspection/archive',
    RESTORE_INSPECTION_PUT = '/task/inspection/restore',
    LIST_ARCHIVE_INSPECTIONS_GET = '/task/inspection/archived/',
    GET_RFI_BY_Task = '/task/taskrfi/task/',
    SCHEDULE_ADD_TASK_CONTRACT_DETAILS = '/task/contract/add/',
    SCHEDULE_UPDATE_TASK_DETAILS = '/task/contract/task/update',
    GET_ALL_EARN_VALUE = '/task/all/earnvalue/',
    GET_TASK_MESSAGES = '/task/messages/',
    GET_ALL_SCHEDULE_VALUE = '/task/all/earnschedule/',
}
export enum CUSTOMDATA {
    CUSTOM_SCHEDULE_DATA = '/custom/schedule/table/',
    CUSTOM_FILTER_SCHEDULE_DATA = '/custom/schedule/filter/table/',
}
export enum CHECKLIST {
    CHECKLIST_PROJECTTYPE_GET = '/checklist/projectType/',
}

export enum REQUISITION {
    LIST_ALL_REQUISITION = '/requisition/all/project',
    LIST_ARCHIVE_REQUISITION = '/requisition/archived/project',
    ARCHIVE_REQUISITION_PUT = '/requisition/archive',
    RESTORE_REQUISITION_PUT = '/requisition/restore',
    UPDATE_REQUISITION_PUT = '/requisition/update',
    UPDATE_REQUISITION_STATUS = '/requisition/update/status',
    REQUISITION_GET_ID = '/requisition',
}

export enum DPR {
    LIST_ALL_DPR = '/dpr/all/project',
    LIST_ARCHIVE_DPR = '/dpr/archived/project',
    ARCHIVE_DPR_PUT = '/dpr/archive',
    RESTORE_DPR_PUT = '/dpr/restore',
    UPDATE_DPR_PUT = '/dpr/update',
    UPDATE_DPR_STATUS = '/dpr/update/status',
    DPR_GET_ID = '/dpr/',
}

export enum PENDINGREQUEST {
    LIST_ALL_PENDING_DPR = '/pendingrequests/dpr/',
    LIST_ALL_PENDING_REQUISITION = '/pendingrequests/requisition/',
    LIST_ALL_PENDING_RFI = '/pendingrequests/rfi/',
    LIST_ALL_PENDING_INSPECTION = '/pendingrequests/inspection/',
}

export enum NOTIFICATION {
    GET_COUNT = '/notifications/all/count/',
    GET = '/notifications/all/user/page/',
    MARKASREAD = '/notifications/update',
    MARKASREAD_ALL = '/notifications/mark/user/',
    CLEAR_ALL = '/notifications/clear/user/',
    GET_UNREAD_ALL = '/notifications/all/user/unread/',
}

export enum RESOURCE {
    RESOURCE_OPTION = '/inventory/resourcess/allIds',
    CREATE_RESOURCE_POST = '/inventory/resourcess/create',
    LIST_ALL_RESOURCE_BY_COMPANY = '/inventory/resourcess/all/',
    LIST_ALL_RESOURCE_PARENT = '/inventory/resourcess/patent/',
    LIST_ARCHIVE_RESOURCE_GET = '/inventory/resourcess/archived/',
    LIST_ARCHIVE_RESOURCE_PARENT = '/inventory/resourcess/archived/patent/',
    ARCHIVE_RESOURCE_PUT = '/inventory/resourcess/archive',
    RESTORE_RESOURCE_PUT = '/inventory/resourcess/restore',
    UPDATE_RESOURCE_PUT = '/inventory/resourcess/update',
    RESOURCE_BY_CATEGORY = '/inventory/resourcess/category/',
    RESOURCE_GET_ID = '/inventory/resourcess/',
}

export enum DASHBOARD {
    THREE_WEEK_TASK_COUNT = '/dashboard/task/count/week/',
    TASK_COUNT_FOR_STATUS = '/dashboard/task/count/status/',
    TASK_COUNT_FOR_DAY = '/dashboard/task/count/day/',
    DPR_REMAINIG_TO_FILL = '/dashboard/DPR/count/remainfill/',
    DPR_PENDIING_APPROVAL = '/dashboard/DPR/count/pendingapproved/',
    PROJECT_COST = '/dashboard/project/costing/',
    PROJECT_MONTHLY_COST = '/dashboard/project/month/costing/',
    PROJECT_TENDERCOST = '/dashboard/tender/cost/scurve/',
    PROJECT_RESOURCE_COST = '/dashboard/resource/cost/scurve/',
    PROJECT_PRODUCTIVITY_CHART = '/dashboard/resource/productivity/chart/',
    PROJECT_MANPOWER_CHART = '/dashboard/manpower/chart/',
    PROJECT_TASK_PRIORITY = '/dashboard/task/count/priority/',
    PROJECT_RFI_INSPECTION = '/dashboard/rfi/inspection/count/',
    PROJECT_APPROVALS = '/dashboard/approval/item/',
    PROJECT_ACTIVITY_GET = '/dashboard/activity/logs/',
    PROJECT_CONTRACT_DETAILS = '/dashboard/project/contact/details/',
    PROJECT_COMMERCIAL = '/dashboard/project/commercial/details/',
    COST_PERFORMANCE_INDEX_CHART = '/dashboard/cost/performance/index/',
    EARN_VALUE_CHART = '/dashboard/earn/value/curve/',
    SCHEDULE_PERFORMANCE_INDEX_CHART = '/dashboard/schedule/performance/index/',
    EARN_SCHEDULE_CHART = '/dashboard/earn/schedule/curve/',
}

export enum CHAT {
    MESSAGES_LIST_PAGE = '/chat/messages/page/',
    LATEST_MESSAGES = '/chat/messages/latest/',
    MESSAGE_CREATE = '/chat/message/create/',
}

export enum SCHEDULING {
    UPLOAD_MPP_FILE = '/import/task/mpp/',
    UPLOAD_MPX_FILE = '/import/task/mpx/',
    UPLOAD_XER_FILE = '/import/task/p6XER/',
    UPLOAD_XER_PROJECT_FILE = '/import/task/verify/p6XERList/',
    UPLOAD_AND_VERIFY_MPP_FILE = '/import/task/verify/mpp/',
    UPLOAD_AND_VERIFY_MPX_FILE = '/import/task/verify/mpx/',
    UPLOAD_AND_VERIFY_XER_FILE = '/import/task/verify/p6XER/',
    CONNECT_P6_DB = '/import/task/p6DBlist/',
    SUBMIT_TASK_DATA = '/import/task/submit/',
    GET_ALL_SCHEDULING_DATA = '/import/task/ganntchart/all/',
    GET_ALL_WBS_SCHEDULING_DATA = '/import/task/ganntchart/wbs/all/',
    GET_ALL_TEMP_SCHEDULING_DATA = '/import/task/temp/ganntchart/all/',
    CHECK_VERIFY_DATA = '/import/task/check/verify/',
    GET_VERIFY_TEMP_TASK_STATUS = '/import/task/verify/status/',
    CLEAR_VERIFY_TEMP_TASK_STATUS = '/import/task/temp/status/clear/',
    GET_SUBMIT_TASK_STATUS = '/import/task/submit/status/',
    CLEAR_VERIFY_SUBMIT_TASK_STATUS = '/import/task/status/clear/',
    GET_TASK_UPLOAD_STATUS = '/import/task/status/',
    CLEAR_SUBMIT_TASK_STATUS = '/import/task/submit/status/clear/',
    DELETE_SCHEDULE_DATA = '/import/task/delete/schedule/',
}

export enum STATISTICS {
    LIST_ALL_WASTE_PROJECT = '/inventory/wasteindicator/all/',
}

export enum SUBSCRIPTION {
    GET_SUBSCRIPTION_PLANS = '/subscription/plan/',
    GET_TRANSACTIONS = '/subscription/transaction/',
    GET_HOSTED_PAGE = '/subscription/hostedPage/',
}

export enum DATARESET {
    DATA_RESET = '/data/reset/',
}
