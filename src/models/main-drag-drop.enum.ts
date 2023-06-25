export enum CardStatusEnum {
    backlog = 1,
    analytics,
    development,
    testing,
    done
};

export const CardStatusLists: Map<CardStatusEnum, string> = new Map([
    [CardStatusEnum.backlog, 'backlog'],
    [CardStatusEnum.analytics, 'analytics'],
    [CardStatusEnum.development, 'development'],
    [CardStatusEnum.testing, 'testing'],
    [CardStatusEnum.done, 'done']
]);