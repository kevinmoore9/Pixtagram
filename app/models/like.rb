# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  photo_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
end
