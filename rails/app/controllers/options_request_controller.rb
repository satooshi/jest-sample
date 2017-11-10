class OptionsRequestController < ApplicationController
  ACCESS_CONTROL_ALLOW_METHODS = %w(GET POST DELETE PATCH OPTIONS).freeze
  ACCESS_CONTROL_ALLOW_HEADERS = %w(Accept Origin Content-Type Authorization Access-Control-Allow-Origin Cache-Control).freeze

  def preflight
    set_preflight_headers!
    head :ok
  end

  private

  def set_preflight_headers!
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Max-Age'] = 300
    response.headers['Access-Control-Allow-Headers'] = ACCESS_CONTROL_ALLOW_HEADERS.join(',')
    response.headers['Access-Control-Allow-Methods'] = ACCESS_CONTROL_ALLOW_METHODS.join(',')
  end
end