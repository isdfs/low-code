"use strict";
/**
 * JWT管理器模块，用于生成、验证和解析JSON Web Token。
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTManager = void 0;
var crypto = __importStar(require("crypto"));
var JWTManager = /** @class */ (function () {
    /**
     * 创建一个JWT管理器实例。
     * @param secretKey 用于签名和验证的密钥。
     * @param algorithm 使用的哈希算法，默认为HS256。
     */
    function JWTManager(secretKey, algorithm) {
        if (algorithm === void 0) { algorithm = 'HS256'; }
        this.secretKey = secretKey;
        this.algorithm = algorithm;
    }
    /**
     * 生成JWT令牌。
     * @param payload 载荷数据。
     * @returns 生成的JWT字符串。
     */
    JWTManager.prototype.generateToken = function (payload) {
        var header = {
            alg: this.algorithm,
            typ: 'JWT',
        };
        var encodedHeader = this.base64UrlEncode(JSON.stringify(header));
        var encodedPayload = this.base64UrlEncode(JSON.stringify(payload));
        var signature = this.createSignature("".concat(encodedHeader, ".").concat(encodedPayload));
        return "".concat(encodedHeader, ".").concat(encodedPayload, ".").concat(signature);
    };
    /**
     * 验证JWT令牌的有效性。
     * @param token 要验证的JWT字符串。
     * @returns 如果令牌有效，返回解析后的载荷数据；否则抛出错误。
     */
    JWTManager.prototype.verifyToken = function (token) {
        var _a = token.split('.'), encodedHeader = _a[0], encodedPayload = _a[1], signature = _a[2];
        if (!encodedHeader || !encodedPayload || !signature) {
            throw new Error('无效的JWT格式');
        }
        var expectedSignature = this.createSignature("".concat(encodedHeader, ".").concat(encodedPayload));
        if (signature !== expectedSignature) {
            throw new Error('令牌签名无效');
        }
        var payload = JSON.parse(this.base64UrlDecode(encodedPayload));
        var currentTime = Math.floor(Date.now() / 1000);
        if (payload.exp && currentTime >= payload.exp) {
            throw new Error('令牌已过期');
        }
        if (payload.nbf && currentTime < payload.nbf) {
            throw new Error('令牌尚未生效');
        }
        return payload;
    };
    /**
     * 创建签名。
     * @param data 要签名的数据。
     * @returns 签名字符串。
     * @private
     */
    JWTManager.prototype.createSignature = function (data) {
        var hmac = crypto.createHmac(this.getHashAlgorithm(), this.secretKey);
        hmac.update(data);
        return this.base64UrlEncode(hmac.digest('base64'));
    };
    /**
     * 根据算法获取对应的哈希算法名称。
     * @returns 哈希算法名称。
     * @private
     */
    JWTManager.prototype.getHashAlgorithm = function () {
        switch (this.algorithm) {
            case 'HS256':
                return 'sha256';
            case 'HS384':
                return 'sha384';
            case 'HS512':
                return 'sha512';
            default:
                throw new Error('不支持的算法');
        }
    };
    /**
     * 执行Base64URL编码。
     * @param input 要编码的字符串。
     * @returns 编码后的字符串。
     * @private
     */
    JWTManager.prototype.base64UrlEncode = function (input) {
        return Buffer.from(input)
            .toString('base64')
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    };
    /**
     * 执行Base64URL解码。
     * @param input 要解码的字符串。
     * @returns 解码后的字符串。
     * @private
     */
    JWTManager.prototype.base64UrlDecode = function (input) {
        input = input.replace(/-/g, '+').replace(/_/g, '/');
        var pad = input.length % 4;
        if (pad) {
            input += '='.repeat(4 - pad);
        }
        return Buffer.from(input, 'base64').toString();
    };
    return JWTManager;
}());
exports.JWTManager = JWTManager;
/**
 * 使用示例：
 * ```typescript
 * const jwtManager = new JWTManager('your-secret-key');
 *
 * const token = jwtManager.generateToken({
 *   sub: '1234567890',
 *   name: 'John Doe',
 *   iat: Math.floor(Date.now() / 1000),
 *   exp: Math.floor(Date.now() / 1000) + 3600, // 1小时后过期
 * });
 *
 * console.log(`生成的JWT: ${token}`);
 *
 * try {
 *   const payload = jwtManager.verifyToken(token);
 *   console.log('令牌有效，载荷数据:', payload);
 * } catch (error) {
 *   console.error('令牌验证失败:', error);
 * }
 * ```
 */
