# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161121151150) do

  create_table "categories", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "uid"
    t.string   "label_en"
    t.string   "label_ja"
    t.boolean  "visible",     default: false
    t.integer  "order_index", default: 0
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  create_table "essays", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "uid"
    t.text     "body",       limit: 65535
    t.boolean  "selected"
    t.integer  "topic_id"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.index ["topic_id"], name: "index_essays_on_topic_id", using: :btree
  end

  create_table "topics", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "uid"
    t.text     "body",        limit: 65535
    t.boolean  "active"
    t.integer  "category_id"
    t.integer  "order_index",               default: 0
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.index ["category_id"], name: "index_topics_on_category_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "uid"
    t.string   "username"
    t.string   "password_digest"
    t.string   "password_salt"
    t.boolean  "active",          default: true
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  add_foreign_key "essays", "topics"
  add_foreign_key "topics", "categories"
end
