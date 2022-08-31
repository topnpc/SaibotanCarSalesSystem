var __originals = {
    st: setTimeout,
    si: setInterval
};

eval("var setTimeout, setInterval;");

setTimeout = __originals.st;
setInterval = __originals.si;

__originals = undefined;

var __si = setInterval;
window.setInterval = function (callback, timeout, param) {
    var _cb = function () {
        callback.apply(null, [param]);
    }

    return __si(_cb, timeout);
};
var __st = setTimeout;
window.setTimeout = function (callback, timeout, param) {
    var _cb = function () {
        callback.apply(null, [param]);
    }

    return __st(_cb, timeout);
};
(function ($) {
    var methods = {
        /*
            对象初始化

            triggerCls : 触发器class
            trigger : 触发事件
            delay : 触发延迟时间
            panelCls : 内容区class，必填
            pervCls : 上一步class
            nextCls : 下一步class
            autoPlay : 自动播放
            overPause : 覆盖暂停，与 autoPlay 配合使用
            interval : 自动播放间隔，单位毫秒
            multiple : 是否可同时打开多个
            effect : 切换效果
            activeCls : 触发器选中样式
            autoPlay : 是否自动播放
            interval : 自动播放时间间隔
            overPause : 覆盖暂停
            activeIndex : 开始步点
            delay : 覆盖触发延迟

            @access public
            @param obj
        */
        init: function (option) {
            var defaults = {
                _triggers: [],
                _panels: [],
                _prev: null,
                _next: null,
                nowOn: 0,
                count: 0,
                multiple: false,
                effect: '',
                activeCls: 'active',
                autoPlay: false,
                interval: 1000,
                overPause: true,
                activeIndex: 0,
                delay: 500
            };

            //插件内部，this为包装好的jquery对象，而非dom对象
            var _switchable = this.Switchable;

            _option = $.extend({}, defaults, option);

            _option.owner = this;
            _option._panels = this.find(_option.panelCls);
            _option.count = _option._panels.length;

            if (_option.triggerCls) {
                _option._triggers = this.find(_option.triggerCls);
                _option._triggers.each(function (n) {
                    $(this).data({index: n});
                });

                if (_option.trigger == 'click') {
                    _option._triggers.on(_option.trigger, _option, methods.switchTo);
                }
                if (_option.trigger == 'over') {
                    var hoverTimer;

                    _option._triggers
                        .on('mouseenter', _option, function (e) {
                            clearTimeout(hoverTimer);
                            hoverTimer = setTimeout(methods.switchTo, e.data.delay, e);
                        })
                        .on('mouseleave', function () {
                            clearTimeout(hoverTimer);
                        });
                }
            }

            this.data({
                setting: _option
            });

            if (_option.pervCls) {
                this.find(_option.pervCls).on('click', _option, methods.prev);
            }
            if (_option.nextCls) {
                this.find(_option.nextCls).on('click', _option, methods.next);
            }

            //自动播放
            if (_option.autoPlay) {
                methods.start.apply(this);

                if (_option.overPause) {
                    $(this).hover(methods.stop, methods.start);
                }
            }

            //默认选中状态
            if (_option.activeIndex >= 0) {
                methods.switchTo.apply(null, [_option, _option.activeIndex]);
            }
        },

        /*
            执行具体切换动作

            @access private
            @param obj
        */
        switchTo: function () {
            if (arguments.length == 1) {
                var setting = arguments[0].data;
                var index = $(arguments[0].currentTarget).data("index");
            } else {
                var setting = arguments[0];
                var index = arguments[1];
            }

            if (!setting.multiple) {
                //隐藏所有内容
                $(setting._panels).hide();
            }

            //移除触发器选中样式
            $(setting._triggers).removeClass(setting.activeCls);

            //实现多种切换效果
            if (setting.effect != '') {
                eval('$(setting._panels[index]).' + setting.effect + 'Toggle();');
            } else {
                $(setting._panels[index]).toggle();
            }

            //检查是否有异步加载内容
            var lazyload = $(setting._panels[index]).find('.datalazyload');
            if (lazyload.length > 0) {
                $(setting._panels[index]).html(lazyload.val());
            }

            //触发器绑定样式
            $(setting._triggers[index]).toggleClass(setting.activeCls);
            setting.nowOn = index;
        },

        /*
            抽象切换动作

            上一个

            @access public
            @param obj
        */
        prev: function (event) {
            var setting = event.data;
            var n = setting.nowOn - 1 < 0 ? setting.count - 1 : setting.nowOn - 1;

            return methods.switchTo.apply(null, [setting, n]);
        },

        /*
            抽象切换动作

            下一个

            @access public
            @param obj
        */
        next: function (event) {
            var setting = event.data;
            var n = setting.nowOn + 1 >= setting.count ? 0 : setting.nowOn + 1;

            return methods.switchTo.apply(null, [setting, n]);
        },

        /*
            抽象动作

            开始自动播放

            @access public
        */
        start: function () {
            var v_data = $(this).data();

            clearInterval(v_data.timing);
            v_data.timing = setInterval(methods.next, v_data.setting.interval, {data: v_data.setting});
        },

        /*
            抽象动作

            暂停播放

            @access public
        */
        stop: function () {
            clearInterval($(this).data('timing'));
        }
    };

    $.fn.Switchable = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery switchable');
        }
    };
})(jQuery);