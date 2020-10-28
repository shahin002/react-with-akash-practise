
// reference doc = https://medium.com/swlh/handling-access-and-refresh-tokens-using-axios-interceptors-3970b601a5da


const LocalStorageService = (function(){
        var _service;

        function _getService() {
            if(!_service) {
                _service = this;
                return _service
            }
            return _service;
        }

        function _setToken(access_token) {
            localStorage.setItem('access_token', access_token);
        }

        function _getAccessToken() {
            return localStorage.getItem('access_token');
        }

        function _clearToken() {
            localStorage.removeItem('access_token');
        }

        return {
            getService : _getService,
            setToken : _setToken,
            getAccessToken : _getAccessToken,
            clearToken : _clearToken
        }}
)();

export default LocalStorageService;
