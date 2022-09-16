"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    create(dto) {
        return this.usersRepository.save(dto);
    }
    async findAll() {
        const arr = await this.usersRepository
            .createQueryBuilder('u')
            .leftJoinAndSelect('u.comments', 'comments')
            .loadRelationCountAndMap('u.commentsCount', 'u.comments', 'comments')
            .getMany();
        return arr.map((obj) => {
            delete obj.comments;
            return obj;
        });
    }
    findById(id) {
        return this.usersRepository.findOneBy({ id });
    }
    findByCond(cond) {
        return this.usersRepository.findOneBy(cond);
    }
    update(id, updateUserDto) {
        return this.usersRepository.update(+id, updateUserDto);
    }
    async search(dto) {
        const qb = this.usersRepository.createQueryBuilder('u');
        qb.limit(dto.limit);
        qb.take(dto.take);
        if (dto.fullName) {
            qb.andWhere(`u.fullName ILIKE :fullName`);
        }
        if (dto.email) {
            qb.andWhere(`u.email ILIKE :email`);
        }
        if (dto.createdAt) {
            qb.andWhere(`u.createdAt ILIKE :createdAt`);
        }
        qb.setParameters({
            fullName: `%${dto.fullName}%`,
            email: `%${dto.email}%`,
            createdAt: `%${dto.createdAt}%`,
        });
        const [items, total] = await qb.getManyAndCount();
        return { items, total };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map