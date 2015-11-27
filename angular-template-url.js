angularTemplateUrl = class angularTemplateUrlC {
    static fix(packageName, templateUrl) {
        return angularTemplateUrlC.packageUrl(packageName) + templateUrl.replace(/^\//, "")
    }

    static packageUrl(packageName) {
        const pkg = packageName.split(':');
        let brk;

        if (meteorVersionCompare.gte('1.2')) {
            brk = [':', '/'];
        } else {
            brk = ['_', '_'];
        }

        return `/packages/${pkg[0] + brk[0] + pkg[1] + brk[1]}`;
    }
};