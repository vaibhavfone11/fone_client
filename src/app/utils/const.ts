export class Constants {
    // Configuration

    // Constant Variables
    public static customerNotesPageSize: number = 3;
    public static notificationPageSize: number = 25;
    public static defaultPageSize: number = 50;
    public static defaultSortingOrder: any[] = ['desc', 'asc'];
    public static dateFormatMMDDYYYY = 'MM/DD/YYYY HH:mm';
    // below constant used for HTMl purpose
    public static dateFormatMMddyyyyLowerCase = 'MM/dd/yyyy HH:mm';
    public static dateFormatExport = 'MMDDYYYYHHmmss';
    public static dateFormat = 'MM/DD/YYYY';
    public static mmddyyyyDateFormat = 'MM-DD-YYYY';
    public static timeFormat = 'HH:mm';
    public static defaultIntervalTime = 10000;
    public static decimalPrecision = 2;
    public static isSuperAdminId = 1;
    public static decimalZeroPrecision = 0;
    public static mcNumberPrefix = 'MC';
    public static cmToInchconst = 0.3937;
    public static zipInvalid = 'Invalid Zip';
    public static alert = 'Alert';
    public static ogToProfile = 'Go to Profile';
    public static ok = 'Ok';
    public static voidConfirmation = 'Void Confirmation';
    public static paid = 'Mark as Paid';
    public static pending = 'Mark as Pending';
    public static agGridIcons = {
        menu: '<i class="fas fa-filter"></i>',
        filter: '<i class="fas fa-filter"></i>',
        sortAscending: '<i class="fas fa-sort-amount-up"></i>',
        sortDescending: '<i class="fas fa-sort-amount-down"></i>',
        groupExpanded: `<img src="/assets/images/ellipsis-v.png" style="padding-right: 2px;  padding-bottom: 5px;"
        class= "cursor-pointer" data-toggle="tooltip" /> `,
        groupContracted: `<img src="/assets/images/ellipsis-v.png" style="padding-right: 2px; padding-bottom: 5px;"
       class= "cursor-pointer" data-toggle="tooltip" />`,
    };
    public static incidentAgGridIcons = {
        menu: '<i class="fas fa-filter"></i>',
        filter: '<i class="fas fa-filter"></i>',
        sortAscending: '<i class="fas fa-sort-amount-up"></i>',
        sortDescending: '<i class="fas fa-sort-amount-down"></i>',
        groupExpanded:
            '<i class="fas fa-check-circle cursor-pointer" title="Resolve"></i>',
        groupContracted:
            '<i class="fas fa-check-circle cursor-pointer" title="Resolve" ></i>',
    };

    public static errorPageUrl = '/error/401';
    public static pageNotFound = '/error/404';
    public static currentUserObject = 'currentUser';
    public static profilePicture = 'profilePicture';
    public static extension = 'extension';
    public static access_token = 'access_token';
    public static selectedCompany = 'selectedCompany';
    public static usersCompanies = 'usersCompanies';
    public static rolePermissions = 'rolepermissions';
    public static projectPermissions = 'projectpermissions';
    public static usersProject = 'usersProject';
    public static selectedProject = 'selectedProject';
    public static projectList = 'projectList';
    public static selectedProjectType = 'selectedProjectType';
    public static permissions = 'permissions';
    public static isProjectExpired = 'isProjectExpired';
    public static selectedProjectId: number = 0;
    public static companyOption = 'CompanyOption';
    public static stopIndexFlag = 'stopIndexFlag';
    public static bolFlag = 'bolFlag';
    public static user = 'user';
    public static role = 'role';
    public static carrierNotesPageSize: number = 3;
    public static userName = 'userName';
    public static documentSize: any[] = [
        'Bytes',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB',
        'EB',
        'ZB',
        'YB',
    ];
    public static frequency: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    public static days = 'Mon, Tue, Wed, Thu, Fri, Sat, Sun';
    public static weekDaysNumber: number = 7;
    public static shipmentNotesPageSize: number = 5;
    public static mcNumberValidationLength: number = 6;
    public static polylineColor: string = '#8EA5FA';
    public static polyLineColorForRemainingPath: string = '#696969';
    public static defaultLatitude: number = 41.881832;
    public static defaultLongitude: number = -87.623177;
    public static mapCenterLat: string = '37.09024';
    public static mapCenterLng: string = '-95.712891';
    public static mapZoom: number = 8;
    public static disableCalenderDays: any[] = [0, 2, 3, 4, 5, 6];
    public static proNumberValidationLength: number = 8;
    public static proNumberCopyshipmentValidationLength: number = 6;
    public static copyMinRange: number = 1;
    public static copyMaxRange: number = 10;
    public static detailRowHeight: number = 250;
    public static headerHeight: number = 40;
    public static rowSelection: string = 'multiple';
    public static defaultRowGenerateCopyShipment: number = 5;
    public static defaultRowGenerateReferenceNumber: number = 5;
    public static defaultDate = '01/01/0001 00:00';

    // Validation messages
    public static valReqField = '{0} is required';
    public static valInvalid = '{0} is invalid';
    public static mcValInvalid = '{0} must start with MC prefix';
    public static minExpiryDateInvalid =
        'Please select {0} greater than or equal to current Date';
    public static minDateCompareValidation =
        'Please select {0} greater than or equal to {1}';
    public static maxDateCompareValidation =
        'Please select {0} less than or equal to {1}';
    public static maxDigitValid =
        'You can create maximum {0} copies of the shipment at a time';
    public static maxValidRating =
        'You can provide minimum {0} and maximum {1} ratings';
    public static maxExpiryDateInvalid =
        'Please select {0} less than or equal to current Date';
    public static valMinLengthCharacter =
        '{0} must contain at least {1} character(s)';
    public static valMinLengthDigit =
        '{0} must contain at least {1} minimum digit(s)';
    public static valMaxLengthCharacter =
        '{0} cannot exceed than {1} characters';
    public static valAlphaNumeric =
        '{0} can only contain alpha numeric characters';
    public static valAlphabetic = '{0} can only contain alphabets';
    public static valNumeric = '{0} can only contain numeric values';
    public static valNumericDecimal =
        '{0} can only contain numeric or decimal values';
    public static valFileUploadRequired = 'Please select file to upload';
    public static valMaxFileUploadSize = 'Maximum upload size is {0}';
    public static valCheckFileSize = 'File size must be greater then 0 KB';
    public static valAllowedType =
        'Please select file with valid extension. Extensions allowed are {0}';
    public static valPasswordNotMatch =
        'New Password and Confirm Password do not match';
    public static valPassword =
        'Use 4-12 characters with a mix of letters(at least one char in Caps & Lower), numbers.';
    public static valNumericGreaterThanZero = '{0} must be greater than zero.';
    public static valSelectOne = 'Please select at-least one {0}';
    public static valWhiteSpaces = 'Whitespace(s) not allowed in {0}';
    public static valUrl = '{0} url is not valid';
    public static valLatitude =
        '{0} must be in between of -90.000000 to +90.000000';
    public static valLongitude =
        '{0} must be in between of -180.000000 to +180.000000';
    public static msgStatusConfirmUpdate = 'You want to update {0} status';
    public static msgClearFilter = 'You want to clear truck search filter?';
    public static msgStatusGLAccountConfirmUpdate =
        'You want to mark selected account as {0} ';
    public static msgActiveInactiveStatus = 'You want to {0}';
    public static msgStatusConfirmDelete = 'You want to delete {0}';
    public static msgStatusConfirmVoid = 'You want to void {0}';
    public static msgStatusConfirmCopy = 'You want to copy {0}';
    public static msgStatusConfirmUnCover = 'You want to uncover {0}';
    public static msgaddRelayStopConfirm = 'You want to add relay stop for {0}';
    public static msgStatusConfirmSelectDelete =
        'You want to delete selected {0}';
    public static msgInvalidBulkImportFile =
        'File upload failed. Uploaded file is not in expected format.';
    public static msgEmptyBulkImportFile =
        'File upload failed. No data was found in uploaded file.';
    public static bulkImportSheetName = 'Sheet1';
    public static msgDefaultPaymentTerm =
        'You want to make this as Default {0}.';
    public static msgCustomerViewConfirm = 'Are you sure you want to delete?';
    public static msgInvalidDiscount =
        'Discount value can not be greater than ';

    public static valEqualLengthCharacter =
        '{0} must contain only {1} character(s)';
    public static valStarTimeInvalid = '{0} must be less than {1}';
    public static valEndTimeInvalid = '{0} must be greater than {1}';
    public static valHoursInvalid = 'Hours must be between {0} and {1}';
    public static minTimeInvalid = '{0} must be less than or equal to {1}';

    public static percentageValidation = 'Percentage must be between 0-100';
    // Toasts messages
    public static msgModelInvalid = 'Invalid model';
    public static msgAddSuccess = '{0} added successfully';
    public static msgClearedException = '{0} cleared successfully';
    public static msgSaveSuccess = '{0} saved successfully';
    public static msgCopySuccess = '{0} copied successfully';
    public static msgCreateSuccess = '{0} created successfully';
    public static msgUpdateSuccess = '{0} updated successfully';
    public static msgDeleteSuccess = '{0} deleted successfully';
    public static msgAlreadyExists = '{0} already exists';
    public static msgUploadedSuccess = '{0} uploaded successfully';
    public static msgAppliedSuccess = '{0} applied successfully';
    public static msgSentSuccess = '{0} sent successfully';
    public static msgApiError =
        'Error processing the request, please contact your Administrator';
    public static msgMaxBuy = 'Max buy request {0} successfully';
    public static msgDisconnectUserConfirm =
        'You want to disconnect selected user.';
    public static msgMaxBuyMinBid =
        'Please collect {0} bids from the carrier to raise Max Buy request.';

    public static msgShipmentLock = '{0} is locked by {1}';
    public static msgShipmentUnLockSuccess = '{0} unlocked successfully';
    public static msgShipmentUnreservedSuccess = '{0} unreserved successfully';
    public static msgShipmentReleaseSuccess = '{0} released successfully';
    public static msgResolvedSuccess = '{0} resolved successfully';
    public static msgEmailSendSuccess = '{0} email sent successfully';
    public static msgRequestRaiseSuccess = '{0} raised successfully.';

    // Http error messages
    public static errorMessage400 =
        'The server is unable to process your request due to invalid syntax. Please contact to your administrator';
    public static errorMessage401 =
        'You do not have the permission to view this page. Please contact to your administrator';
    public static errorMessage404 =
        'The Web server cannot find page you asked for. Please check the URL ensure that the path is correct';
    public static errorMessage500 =
        'The server encountered an internal error and was unable to complete your request. Please contact to your administrator';
    public static errorMessage0 =
        'An error occurred while processing your request. Please contact to your administrator';

    // Http error title
    public static errorTitle400 = 'Bad Request';
    public static errorTitle401 = 'Unauthorized ';
    public static errorTitle404 = 'Page Not Found';
    public static errorTitle500 = 'Internal Server Error';
    public static errorTitle0 = 'Unknown Error';

    // Shipment signed status & message
    public static success = 'SUCCESS';
    public static expired = 'EXPIRED';
    public static signed = 'SIGNED';
    public static notsigned = 'NOTSIGNED';
    public static thankyou = 'Thank You!';
    public static download = 'Download';

    // Other messages
    public static msgDeleteConfirmation = 'You want to delete  {0}';
    public static msgInValidLogin =
        'Either password or username is incorrect, please enter valid credentials';
    public static pageSizeOptions = [10, 20, 50];
    public static msgNoRecords = 'No records to display';
    public static lblDefaultSelectLabel = 'Please Select';
    public static lblDefaultMonthLabel = 'Month';
    public static lblDefaultOnlySelectLabel = 'Select';
    public static msgRefDuplicateValidation =
        'Duplicate reference number and type already exist';
    public static msgReferenceNumRequiredValidation =
        'At least one reference number is required';

    public static rating = [1, 2, 3, 4, 5];
    public static radiusMiles = [50, 100, 150, 200];
    public static lanePricingradiusMiles = [0, 50, 100, 150, 200];
    public static carrierRadiusMiles = [50, 100, 150, 200, 250];
    public static truckSearchRadiusMiles = [0, 50, 100, 150, 200, 250];

    // Ngx Chart Variable End

    // ng5 slider constant variable
    public static ng5SliderStepArray: any[] = [
        { value: 7 },
        { value: 15 },
        { value: 30 },
        { value: 60 },
        { value: 90 },
        { value: 365 },
    ];
    // ng5-slider variable end

    public static daysBack: number = 7;

    // tslint:disable-next-line:max-line-length

    // quickView related changes
    public static msgNotAvailable = 'Not Available';
    public static quickViewStyle = {
        width: '79%',
        height: '100%',
    };
    public static shipmentListStyle = {
        width: '100%',
        height: '100%',
    };
    public static quickViewCustomerStyle = {
        width: '67.5%',
        height: '100%',
    };
    public static customerListStyle = {
        width: '100%',
        height: '100%',
    };
    public static scrollStyle = {
        height: '270px',
    };
    public static quickViewScrollStyle = {
        height: '200px',
    };
    public static noCarrierMsg =
        'No carriers are associated with this factoring company';

    // Status
    public static none = 'none';

    // Cookie Object Name
    public static isLoginFromMobile = 'isLoginFromMobile';
    public static loginUser = 'loginUser';
    public static firstHitUrl = 'firstHitUrl';

    // File extension check
    public static fileExtension = [
        'bmp',
        'gif',
        'jpg',
        'png',
        'pjpeg',
        'jpeg',
        'jfif',
        'pjp',
        'dib',
    ];
    static selectedCountry1: any;
    static selectedTask: any;
    public static selectedUser = 'selectedUser';
    public static usersRegister = 'usersRegister';
}
