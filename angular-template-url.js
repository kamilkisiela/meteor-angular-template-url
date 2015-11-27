angularTemplateUrl = function (packageName, templateUrl) {

    var pkg = packageName.split(':');
    var brk;

    if (meteorVersionCompare.gte('1.2')) {
        brk = [':', '/'];
    } else {
        brk = ['_', '_'];
    }

    var packageUrl = "/packages/" + pkg[0] + brk[0] + pkg[1] + brk[1];

    return packageUrl + templateUrl.replace(/^\//, "")
};