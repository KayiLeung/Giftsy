class ApplicationController < ActionController::Base
    helper_method :current_user, :is_logged_in?
    
    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def is_logged_in?
        !!current_user
    end

    def logout!
        @current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def ensure_logged_in
        redirect_to root_url unless is_logged_in?
    end
end