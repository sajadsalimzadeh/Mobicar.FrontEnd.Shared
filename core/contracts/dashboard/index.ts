import { Level } from "../identity/level";


export interface DashboardLabelValue {
    label: string
    value: number
}

export interface DashboardLabelMultiValue {
    label: string;
    items: DashboardLabelValue[]
}

export function DashboardLabelMultiValueToSeries(data: DashboardLabelMultiValue[]) {
    const series: { name: string, data: number[] }[] = [];
    for (const labelItem of data) {
        for (const item of labelItem.items) {
            const seri = series.find(s => s.name === item.label);
            if (!seri) {
                series.push({
                    name: item.label,
                    data: []
                })
            }
        }
    }

    for (const seri of series) {
        for (const labelItem of data) {
            seri.data.push(labelItem.items.find(item => item.label === seri.name)?.value ?? 0);
        }
    }

    return series;
}

export interface DashboardAdminResponse {
    creationTime: string
    onlineUserCount: number
    onlineConnectionCount: number
    userCount: number
    agentCount: number
    userByPrivilegeGroupCounts: DashboardLabelValue[]
    tokenCount: number
    tokenActiveCount: number
    deviceCount: number
    deviceWithOwnerCount: number
    deviceByWorkflowStateCounts: DashboardLabelValue[]
    vehicleCount: number
    vehicleByCompanyCodeCounts: DashboardLabelValue[]
    firmwareCount: number
    hardwareCount: number
    applicationCount: number
    protocolCount: number
    salePackageCount: number
    salePackageEnableCount: number
    orderCount: number
    orderDraftCount: number
    orderCompleteCount: number
    organizationCount: number
    serverCount: number
    transactionCount: number
    transactionWalletChargeAmount: number
    walletBalance: number
    walletReceivable: number
    walletPayable: number
    commissionAmount: number
    commissionDraftAmount: number
    commissionPayableAmount: number
    commissionPayingAmount: number
    commissionPaidAmount: number
    commissionPaymentPaidAmount: number
    commissionPaymentPayingAmount: number
    pendingBankInfoCount: number
}

export interface DashboardDeviceResponse {
    creationTime: string
    count: number
    withOwnerCount: number
    connectToVehicleCount: number
    byOrganizations: DashboardLabelValue[]
    byHardwares: DashboardLabelValue[]
    byHardwareTypes: DashboardLabelValue[]
    byFirmwares: DashboardLabelValue[]
    byGroups: DashboardLabelValue[]
    byEncryptionTypes: DashboardLabelValue[]
    byWorkflowStates: DashboardLabelValue[]
    byDataServers: DashboardLabelValue[]
}

export interface DashboardFinanceResponse {
    creationTime: string
    transactionCount: number
    transactionIncreaseCount: number
    transactionIncreaseAmount: number
    transactionDecreaseCount: number
    transactionDecreaseAmount: number
    dailyTransactionCounts: DashboardLabelValue[]
    dailyTransactionAmounts: DashboardLabelValue[]
    dailyTransactionByTypeCounts: DashboardLabelMultiValue[]
    dailyTransactionByTypeAmounts: DashboardLabelMultiValue[]
    dailyTransactionReceivableCounts: DashboardLabelValue[]
    dailyTransactionReceivableAmounts: DashboardLabelValue[]
    dailyTransactionPayableCounts: DashboardLabelValue[]
    dailyTransactionPayableAmounts: DashboardLabelValue[]
    dailyCommissionAmounts: DashboardLabelValue[]
    dailyclearanceAmounts: DashboardLabelValue[]
}

export interface DashboardSaleResponse {
    dailyOrderCounts: DashboardLabelValue[]
    dailyOrderTotalPrices: DashboardLabelValue[]
    dailyDraftOrderCounts: DashboardLabelValue[]
    dailyDraftOrderTotalPrices: DashboardLabelValue[]
    dailyInternalOrderCounts: DashboardLabelValue[]
    dailyInternalOrderTotalPrices: DashboardLabelValue[]
    dailyExternalOrderCounts: DashboardLabelValue[]
    dailyExternalOrderTotalPrices: DashboardLabelValue[]
    dailyOrderByPaymentMethodCounts: DashboardLabelMultiValue[]
    dailyOrderByPaymentMethodTotalPrices: DashboardLabelMultiValue[]
    dailyOrderBySalePackageCounts: DashboardLabelMultiValue[]
    dailyOrderBySalePackageTotalPrices: DashboardLabelMultiValue[]
}


export interface DashboardAgentResponse {
    creationTime: string
    
    level: Level;
    totalCommissionAmount: number;
    totalClearedAmount: number;
    totalPendingAmount: number
    
    upgradePersonalCommissionAmount: number;
    upgradeNetworkCommissionAmount: number;
    upgradeNetworkMemberCount: number;
    
    downgradePersonalCommissionAmount: number;
    downgradeNetworkCommissionAmount: number;
    downgradeNetworkMemberCount: number;
    
    dailyCommissionAmount: DashboardLabelValue[];
    dailyCommissionCount: DashboardLabelValue[];
    
    dailyPersonalCommissionAmount: DashboardLabelValue[];
    dailyPersonalCommissionCount: DashboardLabelValue[];
    
    dailyNetworkCommissionAmount: DashboardLabelValue[];
    dailyNetworkCommissionCount: DashboardLabelValue[];
    
    dailyCommissionPerMemberAmount: DashboardLabelMultiValue[];
}