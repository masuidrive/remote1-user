c1 = Category.create!(
    uid: "general",
    label_en: "General",
    label_ja: "一般",
    visible: true,
    order_index: 100
)

c1.topics.create!(
    body: "就業先を選ぶ上で一番大切にしていることはなんですか？",
    order_index: 100,
    active: true
)

c1.topics.create!(
    body: "挫折・失敗経験について教えてください",
    order_index: 200,
    active: true
)

c1.topics.create!(
    body: "test topic on general",
    order_index: 300,
    active: false
)

c2 = Category.create!(
    uid: "serverside",
    label_en: "Server side",
    label_ja: "サーバサイド",
    visible: true,
    order_index: 200,
)

c2.topics.create!(
    body: "あなたの好きな言語はなんですか？ その言語が他の言語より優れているところはどこですか？",
    order_index: 100,
    active: true
)

c3 = Category.create!(
    uid: "example",
    label_en: "Example",
    label_ja: "例文",
    visible: false,
    order_index: 300,
)
