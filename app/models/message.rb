class Message < ApplicationRecord
  belongs_to :user
  belongs_to :channel

  validates :content, presence: true
  def as_json(options = {})

    nickname =  user.email.match(/[^@]+/)[0]

    {
      id: id,
      author: nickname,
      content: content,
      created_at: created_at,
      channel: channel.name
    }
  end
end
