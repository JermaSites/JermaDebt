# frozen_string_literal: true

require_relative './fraction_parsing'

module NumbersInWords
  class Special
    extend Forwardable
    def_delegator :that, :to_s

    include FractionParsing

    attr_reader :that, :only_compress

    def initialize(that, only_compress)
      @that = that
      @only_compress = only_compress
    end

    def call
      float ||
        negative ||
        fraction(that) ||
        mixed_words_and_digits ||
        one
    end

    def float
      text_including_punctuation.to_f if text =~ /^-?\d+(.\d+)?$/
    end

    def negative
      stripped = strip_minus text
      return unless stripped

      stripped_n = NumbersInWords.in_numbers(stripped, only_compress: only_compress)
      only_compress ? stripped_n.map { |k| k * -1 } : -1 * stripped_n
    end

    def mixed_words_and_digits
      return unless numeric?(that)

      in_words = that.split(' ').map { |word| numeric?(word) ? NumbersInWords.in_words(word) : word }.join(' ')
      ToNumber.new(in_words, only_compress).call
    end

    def numeric?(word)
      word.match(/\d+/)
    end

    def strip_minus(txt)
      txt.gsub(/^minus/, '') if txt =~ /^minus/
    end

    def one
      one = check_one text

      return unless one

      res = NumbersInWords.in_numbers(one[1])
      only_compress ? [res] : res
    end

    def check_one(txt)
      txt.match(/^one (#{POWERS_RX})$/)
    end
  end
end
