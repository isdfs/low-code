"use strict";
/**
 * OAuth管理器模块，用于处理OAuth2.0授权流程。
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthManager = void 0;
var OAuthManager = /** @class */ (function () {
    function OAuthManager(config) {
        this.config = config;
        this.accessToken = null;
        this.refreshToken = null;
    }
    /**
     * 生成授权URL，用户可以通过此URL进行授权。
     * @returns 授权URL。
     */
    OAuthManager.prototype.generateAuthorizationUrl = function () {
        var url = new URL(this.config.authorizationUrl);
        url.searchParams.append('client_id', this.config.clientId);
        url.searchParams.append('redirect_uri', this.config.redirectUri);
        url.searchParams.append('response_type', 'code');
        url.searchParams.append('scope', this.config.scope);
        return url.toString();
    };
    /**
     * 使用授权码获取访问令牌。
     * @param authorizationCode 授权码。
     * @returns 返回访问令牌和刷新令牌。
     */
    OAuthManager.prototype.fetchAccessToken = function (authorizationCode) {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.config.tokenUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: new URLSearchParams({
                                grant_type: 'authorization_code',
                                code: authorizationCode,
                                redirect_uri: this.config.redirectUri,
                                client_id: this.config.clientId,
                                client_secret: this.config.clientSecret,
                            }),
                        })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('获取访问令牌失败');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.accessToken = data.access_token;
                        this.refreshToken = data.refresh_token;
                        return [2 /*return*/, {
                                accessToken: this.accessToken,
                                refreshToken: this.refreshToken,
                            }];
                }
            });
        });
    };
    /**
     * 使用刷新令牌刷新访问令牌。
     * @returns 返回新的访问令牌。
     */
    OAuthManager.prototype.refreshAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.refreshToken) {
                            throw new Error('刷新令牌不存在，无法刷新访问令牌');
                        }
                        return [4 /*yield*/, fetch(this.config.tokenUrl, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                },
                                body: new URLSearchParams({
                                    grant_type: 'refresh_token',
                                    refresh_token: this.refreshToken,
                                    client_id: this.config.clientId,
                                    client_secret: this.config.clientSecret,
                                }),
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('刷新访问令牌失败');
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.accessToken = data.access_token;
                        return [2 /*return*/, this.accessToken];
                }
            });
        });
    };
    /**
     * 获取当前的访问令牌。
     * @returns 当前的访问令牌。
     */
    OAuthManager.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    return OAuthManager;
}());
exports.OAuthManager = OAuthManager;
/**
 * 使用示例：
 * ```typescript
 * const config: OAuthConfig = {
 *   clientId: 'your-client-id',
 *   clientSecret: 'your-client-secret',
 *   authorizationUrl: 'https://example.com/oauth/authorize',
 *   tokenUrl: 'https://example.com/oauth/token',
 *   redirectUri: 'https://your-app.com/callback',
 *   scope: 'read write'
 * };
 *
 * const oauthManager = new OAuthManager(config);
 * const authUrl = oauthManager.generateAuthorizationUrl();
 * console.log(`授权URL: ${authUrl}`);
 *
 * // 假设用户已经完成授权并获取到授权码
 * const authorizationCode = 'authorization-code-from-callback';
 * const tokens = await oauthManager.fetchAccessToken(authorizationCode);
 * console.log(`访问令牌: ${tokens.accessToken}`);
 * console.log(`刷新令牌: ${tokens.refreshToken}`);
 * ```
 */
