import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    // One user can login with many accounts, for example via Google and Facebook
    //  @OneToMany(() => Account, (account) => account.user)
    //  accounts?: Account[]
}
