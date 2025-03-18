export enum LoggingLevel {
    DEBUG = 'DEBUG',
    ERROR = 'ERROR',
    WARNING = 'WARNING',
    INFO = 'INFO',
}

export enum TaskStatus {
    TODO = 'TODO',
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    HOLD = 'HOLD',
    COMPLETED = 'COMPLETED',
}

export enum TaskRequisitionStatus {
    TODO = 'TODO',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    PENDING = 'PENDING',
}

export enum TaskStatusColor {
    'TODO' = '#748892',
    'PENDING' = '#ffba57',
    'IN_PROGRESS' = '#4680ff',
    'HOLD' = '#ff5252',
    'COMPLETED' = '#9ccc65',
}

export enum TaskPriority {
    URGENT = 'URGENT',
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
}

export enum TaskPriorityColor {
    'URGENT' = '#cc0000',
    'HIGH' = '#ff5252',
    'MEDIUM' = '#ffba57',
    'LOW' = '#9ccc65',
}

export enum DrawingStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}
