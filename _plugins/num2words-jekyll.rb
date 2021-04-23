require_relative 'numbers_in_words'

module Jekyll

	module NumberWordsJekyll
		def num2words(value)
			return NumbersInWords.in_words(value)
		end
	end

end

Liquid::Template.register_filter(Jekyll::NumberWordsJekyll)
