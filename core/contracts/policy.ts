import { HardwareType } from "./versioning/hardware"

export interface DeviceVersioningPolicy {
    ids: string[]
    applicationIds: string[]
    firmwareIds: string[]
    hardwareIds: string[]
    workflowStateIds: string[]
    encryptionTypeIds: string[]
    groupIds: string[]
    hardwareTypes: HardwareType[]
    serials: DeviceVersioningPolicySerial[]
    firmwareVersions: DeviceVersioningPolicyFirmwareVersion[]
    hardwareVersions: DeviceVersioningPolicyHardwareVersion[]
}

export function DeviceVersioningPolicyDescription(item: DeviceVersioningPolicy) {
    let str = [];
    if (item.ids?.length > 0) {
        str.push(' شناسه های دستگاه');
    }

    if (item.applicationIds?.length > 0) {
        str.push(' شناسه‌های برنامه');
    }

    if (item.firmwareIds?.length > 0) {
        str.push(' شناسه‌های فرمویر');
    }

    if (item.hardwareIds?.length > 0) {
        str.push(' شناسه‌های سخت‌افزار');
    }

    if (item.workflowStateIds?.length > 0) {
        str.push(' شناسه‌های وضعیت گردش کار');
    }

    if (item.encryptionTypeIds?.length > 0) {
        str.push('شناسه‌های نوع رمزگذاری');
    }

    if (item.groupIds?.length > 0) {
        str.push('گروه');
    }

    if (item.hardwareTypes?.length > 0) {
        str.push('نوع سخت افزار');
    }

    if (item.serials?.length > 0) {
        str.push('سریال');
    }

    if (item.firmwareVersions?.length > 0) {
        str.push('ورژن فرمویر');
    }

    if (item.hardwareVersions?.length > 0) {
        str.push('ورژن سخت افزار');
    }

    return str.length > 0 ? 'فیلترها شامل ' + str.join('، ') + ' می‌باشد' : 'بدون فیلتر ';
}

export interface DeviceVersioningPolicySerial {
    prefix: string
    min: string
    max: string
}

export interface DeviceVersioningPolicyFirmwareVersion {
    installed: string[]
    min: string
    max: string
}

export interface DeviceVersioningPolicyHardwareVersion {
    min: string
    max: string
}
