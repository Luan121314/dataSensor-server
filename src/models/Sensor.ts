import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
class Sensor {
    @ObjectIdColumn()
    id: string;

    @Column()
    value: string;

    @Column()
    unity: string;

    @Column()
    deviceId: string;

    @CreateDateColumn({ type: 'timestamp', default: () => new Date().getTime() })
    created_at: Date;
}

export default Sensor;
