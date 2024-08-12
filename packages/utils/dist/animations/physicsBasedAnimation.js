"use strict";
/**
* PhysicsBasedAnimation 类实现了基于物理模拟的动画系统。
*/
var PhysicsBasedAnimation = /** @class */ (function () {
    function PhysicsBasedAnimation(element, properties, initialVelocity) {
        if (initialVelocity === void 0) { initialVelocity = { x: 0, y: 0 }; }
        this.animationFrameId = null;
        this.element = element;
        this.properties = properties;
        this.velocity = initialVelocity;
        this.position = { x: 0, y: 0 };
    }
    /**
     * start 方法开始物理动画模拟。
     */
    PhysicsBasedAnimation.prototype.start = function () {
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    /**
     * stop 方法停止物理动画模拟。
     */
    PhysicsBasedAnimation.prototype.stop = function () {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    };
    /**
     * animate 方法是物理动画的主循环，计算并应用物理运动。
     */
    PhysicsBasedAnimation.prototype.animate = function () {
        var _a = this.properties, mass = _a.mass, gravity = _a.gravity, friction = _a.friction, restitution = _a.restitution;
        // 更新速度和位置
        this.velocity.y += gravity / mass;
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        // 碰撞检测及反弹
        if (this.position.y > window.innerHeight - this.element.clientHeight) {
            this.position.y = window.innerHeight - this.element.clientHeight;
            this.velocity.y *= -restitution;
        }
        if (this.position.x > window.innerWidth - this.element.clientWidth || this.position.x < 0) {
            this.velocity.x *= -restitution;
            this.position.x = Math.max(0, Math.min(this.position.x, window.innerWidth - this.element.clientWidth));
        }
        // 应用位移
        this.element.style.transform = "translate(".concat(this.position.x, "px, ").concat(this.position.y, "px)");
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    return PhysicsBasedAnimation;
}());
/**
* 使用示例：
* const physicsAnim = new PhysicsBasedAnimation(myElement, {
*     mass: 1,
*     gravity: 9.8,
*     friction: 0.9,
*     restitution: 0.8
* });
* physicsAnim.start(); // 启动基于物理模拟的动画
*/
