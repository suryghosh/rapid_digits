import { pgTable, text, serial } from "drizzle-orm/pg-core"

export const courses = pgTable("courses",{
    id:serial("id").primaryKey(),
    title:text("title").notNull(),
    imagesSrc:text("image_src")
})