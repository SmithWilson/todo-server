import { ObjectId } from "mongoose";
import { CardStatusEnum, CardStatusLists } from "./main-drag-drop.enum";
import { Exclude } from 'class-transformer';

export class CardDto{
    constructor(card: any) {
        this.id = card.id;
        this.todoCode = card.todoCode ?? '';
        this.name = card.name ?? '';
        this.tags = card.tags ?? [];
        this.description = card.description ?? '';
        this.dateFrom = card.dateFrom ?? null;
        this.dateTo = card.dateTo ?? null;
        this.imgUrl = card.imgUrl ?? '';
        this.comments = card.comments ?? [];
        this.assignments = card.assignments ?? [];
        this.priority = card.priority ?? '';
        this.status = card.status ?? CardStatusEnum.backlog;

        this.statusName = CardStatusLists.get(this.status);
    }

    @Exclude()
    id: ObjectId;
    todoCode: string;
    name: string;
    tags: string[];
    description: string;
    dateFrom: Date | null;
    dateTo: Date | null;
    imgUrl: string;
    comments: Comment[];
    assignments: Assignment[];
    priority: string;
    status: CardStatusEnum;
    statusName: string;
}

export class Comment {
    constructor(
        id: string,
        comment: string,
        userId: string
    ) {
        this.id = id;
        this.comment = comment;
        this.userId = userId;
    }

    id: string;
    comment: string;
    userId: string;
}

export class Assignment {
    constructor(
        userId: string,
        avatarUrl: string
    ){
        this.userId = userId;
        this.avatarUrl = avatarUrl;
    }

    userId: string;
    avatarUrl: string;
}