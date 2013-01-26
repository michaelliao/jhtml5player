/*
 * jhtml5player gray skin
 */

(function() {

})();

_IMAGE_BIG_PLAY = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAIAAABt+uBvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABSdJREFUeNrs21tP22YYB/DYfp0ThGNoAU2TthsKrJAmgQScE46dkLLxWSZN2jfZbqqp2yRUTS3TWqaCKGda6MIhUFWd1F3sbtpBXadthSS2kz2O1xBWYBdNiF0/f0XBIVJs/fS8J78J9dtPP1owp4dGAgRCIARCIARCIARCIAwCIRACIRACIRACIRAGgRAIgRAIgRDoTQip7sdlc7lb07fTW7s0TQ1c7k+Ni12dFw0NRFV34/D6F1Pb2xmGEIqiipBCwesdnEglLlzowApSs7f/2Ga3s4TQNF0oFhVF2d9/vJt55Pd5gMntbjc7EGWxWFk1DMMUS0AKIZIsZzKPdnb3h/3eVEpsb2s1LxC4QPuCaEA0/FEU9anEtLWT2draCQSHUuNCa0uLKSsIoj1rASOKKjMBnCzL36V30untkZHAeCLe3NxkLiDN5virY0xEY5Kkjc305maa44LA5HI1mgboVLRXmBQFmO4/eAhSYS6YEPnGxgaTAp3FJMvQN62ub9zfeBgNc4IQa3A6TQp0MtPLjgmYlpbX1tY3YtGQEI86HA6TAp3ARNOakzbSLSyurK0/GItF4nzEZrOZFOgYU8lInViWmSRpbn5xZXWd56Nj0bDNZjUp0IlMR9MBSbo7e29leT0uxKB7slpZkwK9ysSUGh0pMUE1zXw7t7i0KsZj0QgH/zMp0FlMgJSXbs/MAlMyEedGA+fJpC+gU5lkGR65XH766zvzC8vjJSZ416RA/2GCHFUTIdnD7M1b3wBTKikEA/5aM+kXqMykrXu1g/Ji+MWLgxtfTc/fWxpPCoFhX+X6xlxAJzJpIx1LyJ9//T114ybMCSZSCb/PUwsm5uOPPqzix0Hls6V7HbWofK1X+rfRlU4BDQ9OdnhwmNl7tLO7B4vezs6L1WUyRgX9bzXBSPf8+R/XP5+a7Vx4fyI5cLm/WkzGAzqRCepIVm9ekmfPfr/22ZdvdXdNTl7t6+15/RMZe9un3HMDjZVl7aU4HY6ff/n1k0+vwdLX7ECVTNokwGq1whIXmOBgdm7BvE3s7C5c3S8oFJhqTLjf2J1VYJr84CpW0FFK25RqFEXp7u6amEi9+87biiwh0BENBOZBiYTQ13dJlnKvr2N4oEqajg53Min29/eCSz57YN6JYiWNtnnb7nYnxPjgwHuKnJdyh2Zci51G09beJgr8Fc8g0ORzB7U4HTEoTXNLS0LkvVc8hYJcIxojAVXSNDU3CfGxoSFfQe1sDmt9amIgGpfLxfOxQMBfLChV72uMB1Qsat/AKsCcuMHp5PloMDhsKUKLyp7nZRCd0zgd9lgsOjoapCxq2Zz/xRDd0jgc9kgkHOJGGMoiy3l4sy6XRHRIA8txPhIKh0YJQ8mSJNeJRi9AZRoIa7VGQ6PRSIgltEpTKNb98ohOaAhLIpFQLBpmWUb9rgfUjT5C6kkDD/U+KcNx3FgsYrNZoa+RJUVX3SKpIw1N0xw3AuO33WZTVJqcRX8h9aIJBgPxeAxGcd3SnB9QJQ28HBr2w1rB1eiElYKeaWoDVLI4jcbn84pivMml0kh5vdPUBIhh6OJLlzINHHi9HjEhtDS5DERTE6Cenp6nT3+APqZs5PEMiKLQ1tpcoslajJYq/9pHVop3Zu4+efI9HF/q7RUF3t3eCjRQSRZjpspAFEUR1kYzamEWFBnmNTARtBg5VW5i0KaM2I7OCP4kE4EQCIEQCIEQCIEQCINACIRACIRACIRACIRBIARCIARCIGPkHwEGADme7yqmTdjqAAAAAElFTkSuQmCC)';

_IMAGE_BUTTONS = 'url(data:image/png;base64,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)';

_IMAGE_PROGRESS = 'url(data:image/png;base64,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)';

_IMAGE_PROGRESS_BG = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAALCAYAAAC+jufvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABpJREFUeNpiKMjN/c/EAATEEgz///9nAAgwAIJsBVkuBWApAAAAAElFTkSuQmCC)';

_IMAGE_PROGRESS_BUFFER_BG = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAALCAYAAAC+jufvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB9JREFUeNpiUFNTC2ZiYGBgAREMhIk/DP///2cACDAAOg0E1V/5C9sAAAAASUVORK5CYII=)';

_IMAGE_PROGRESS_PLAYED_BG = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAALCAYAAABCm8wlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANZJREFUeNp0j0FOwzAQRb8zY5c2sEiOwLnYwD0RB0LUSEht3NRj/tgLVoxsRfHzn3kOHy+v7XQ4QCaBqmI9HpH4BQJuVqHPywrhgUrEMj8ixUg2odQ78nZlKGeICJMz4lbAVihmyKXAWmPw/IXl4TTgRMjDvO8wjNK1GuL1AlzaSNY6YAgQbo1MeXXYk63/CyUX+igFKFSRaWxMuL0nHSaGtfAFmcbGi/DVYeqwO3yyaUgJwdqA6Q/6WH3/PmPmu33mk8+8bR3uhD90Cq21N++Ef+pXgAEAJMpaIWKTR3IAAAAASUVORK5CYII=)';

_IMAGE_BAR = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAjCAIAAAD9vXYLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIlJREFUeNrs1TkOAyEMBVAcwtJw/2MiVrEICFEuYFOMRqP8hoanb9wArbUxBkOHcw4559473gghIKW0q/BGSgkxRrIJIdRa8UYpBd77UgreaK3BOUc177XWnBNv9v2v2SGbk547z/aont/BKDmd7Yr3vBg9V/ZQd3DS8zf3NmCt3V8DHhhjPgIMAGoYuJftYaqcAAAAAElFTkSuQmCC)';

_CSS = {
    '@keyframes player-progress-bar-stripes': 'from { background-position: 40px 0; } to { background-position: 0 0; }',
    'div.player-big-play': {
        'display': 'block',
        'position': 'absolute',
        'width': '96px',
        'height': '96px',
        'opacity': '0.9',
        'cursor': 'pointer',
        'border-radius': '20px',
        'border': '3px solid #666',
        'box-shadow': '6px 6px 8px #333',
        'background-image': _IMAGE_BIG_PLAY,
    },
    'div.player-big-play:hover': {
        'box-shadow': '0 0 120px #fff',
    },
    'div.player-button': {
        'display': 'block',
        'float': 'left',
        'width': '26px',
        'height': '24px',
        'background-image': _IMAGE_BUTTONS,
        'background-repeat': 'no-repeat',
        'cursor': 'pointer',
    },
    'div.player-button-sep': {
        'display': 'block',
        'float': 'left',
        'width': '16px',
        'height': '24px',
        'background-image': _IMAGE_BUTTONS,
        'background-repeat': 'no-repeat',
        'background-position': '-468px 0px',
    },
    'div.player-button-space': {
        'display': 'block',
        'float': 'left',
        'width': '12px',
        'height': '24px',
    },
    'div.player-button-play': {
        'background-position': '0px 0px',
    },
    'div.player-button-play:hover': {
        'background-position': '-26px 0px',
    },
    'div.player-button-play-disabled': {
        'background-position': '-52px 0px',
    },
    'div.player-button-pause': {
        'background-position': '-78px 0px',
    },
    'div.player-button-pause:hover': {
        'background-position': '-104px 0px',
    },
    'div.player-button-pause-disabled': {
        'background-position': '-130px 0px',
    },
    'div.player-button-pause': {
        'background-position': '-78px 0px',
    },
    'div.player-button-pause:hover': {
        'background-position': '-104px 0px',
    },
    'div.player-button-pause-disabled': {
        'background-position': '-130px 0px',
    },
    'div.player-button-fullscreen': {
        'background-position': '-156px 0px',
    },
    'div.player-button-fullscreen:hover': {
        'background-position': '-182px 0px',
    },
    'div.player-button-fullscreen-disabled': {
        'background-position': '-208px 0px',
    },
    'div.player-button-volumn': {
        'background-position': '-234px 0px',
    },
    'div.player-button-volumn:hover': {
        'background-position': '-260px 0px',
    },
    'div.player-button-volumn-disabled': {
        'background-position': '-286px 0px',
    },
    'div.player-button-mute': {
        'background-position': '-312px 0px',
    },
    'div.player-button-mute:hover': {
        'background-position': '-338px 0px',
    },
    'div.player-button-mute-disabled': {
        'background-position': '-364px 0px',
    },
    'div.player-button-cc': {
        'background-position': '-390px 0px',
    },
    'div.player-button-cc:hover': {
        'background-position': '-416px 0px',
    },
    'div.player-button-cc-disabled': {
        'background-position': '-442px 0px',
    },
    'div.player-volumn-bg': {
        'display': 'block',
        'float': 'left',
        'width': '61px',
        'height': '11px',
        'margin-top': '6px',
        'position': 'relative',
        'background-image': _IMAGE_PROGRESS,
        'background-position': '0px 0px',
    },
    'div.player-volumn-icon': {
        'display': 'block',
        'width': '11px',
        'height': '11px',
        'left': '50px',
        'top': '0px',
        'position': 'absolute',
        'background-image': _IMAGE_PROGRESS,
        'background-repeat': 'no-repeat',
        'background-position': '-22px -11px',
    },
    'div.player-progress': {
        'display': 'block',
        'float': 'left',
        'height': '11px',
        'margin-top': '6px',
        'position': 'relative',
    },
    'div.player-progress-left-bg': {
        'display': 'block',
        'float': 'left',
        'width': '4px',
        'height': '11px',
        'background-image': _IMAGE_PROGRESS,
        'background-position': '0px -11px',
    },
    'div.player-progress-mid-bg': {
        'display': 'block',
        'float': 'left',
        'height': '11px',
        'background-image': _IMAGE_PROGRESS_BG,
        'background-repeat': 'repeat-x',
    },
    'div.player-progress-right-bg': {
        'display': 'block',
        'float': 'left',
        'width': '4px',
        'height': '11px',
        'background-image': _IMAGE_PROGRESS,
        'background-position': '-13px -11px',
    },
    'div.player-progress-container': {
        'display': 'block',
        'float': 'left',
        'height': '11px',
        'position': 'relative',
    },
    'div.player-progress-layer': {
        'position': 'absolute',
        'display': 'block',
        'left': '0px',
        'top': '0px',
        'height': '11px',
    },
    'div.player-progress-played-bg': {
        'display': 'block',
        'float': 'left',
        'height': '11px',
        'background-image': _IMAGE_PROGRESS_PLAYED_BG,
        'background-repeat': 'repeat-x',
    },
    'div.player-progress-buffer-bg': {
        'display': 'block',
        'float': 'left',
        'height': '11px',
        'background-image': _IMAGE_PROGRESS_BUFFER_BG,
        'background-repeat': 'repeat-x',
    },
    'div.player-progress-buffer-right': {
        'display': 'block',
        'float': 'left',
        'width': '4px',
        'height': '11px',
        'background-image': _IMAGE_PROGRESS,
        'background-position': '-18px -11px',
    },
    'div.player-progress-icon': {
        'display': 'block',
        'position': 'absolute',
        'top': '-3px',
        'width': '16px',
        'height': '17px',
        'background-image': _IMAGE_PROGRESS,
        'background-position': '-61px 0px',
    },
}

jhtml5player.createCss(_CSS);

function _create_progress_bar(w) {
    var offset = 0;
    var buffer = 0;
    var bw = w - 4;
    return {
        'tag': 'div',
        'class': 'player-progress',
        'total': (w - 8) + '',
        'style': {
            'width': w + 'px',
        },
        'children': [
            {
                'tag': 'div',
                'class': 'player-progress-left-bg',
            },
            {
                'tag': 'div',
                'class': 'player-progress-container',
                'style': {
                    'width': bw + 'px',
                },
                'children': [
                    {
                        'tag': 'div',
                        'class': 'player-progress-layer',
                        'style': {
                            'width': bw + 'px',
                        },
                        'children': [
                            {
                                'tag': 'div',
                                'class': 'player-progress-mid-bg',
                                'style': {
                                    'width': (bw - 4) + 'px',
                                },
                            },
                            {
                                'tag': 'div',
                                'class': 'player-progress-right-bg',
                            },
                        ],
                    },
                    {
                        'tag': 'div',
                        'class': 'player-progress-layer',
                        'style': {
                            'width': bw + 'px',
                        },
                        'children': [
                            {
                                'tag': 'div',
                                'class': 'player-progress-played-bg',
                                'style': {
                                    'width': '20px',
                                }
                            },
                            {
                                'tag': 'div',
                                'class': 'player-progress-buffer-bg',
                                'style': {
                                    'width': '0px',
                                },
                            },
                            {
                                'tag': 'div',
                                'class': 'player-progress-buffer-right',
                            },
                        ],
                    },
                ],
            },
            {
                'tag': 'div',
                'class': 'player-progress-icon',
                'style': {
                    'left': (offset - 4) + 'px',
                }
            },
        ],
    }
}

function _create_buttons(w) {
    jhtml5player.log('create button in width: ' + w);
    return [
        {
            // play or pause: 26px
            'tag': 'div',
            'class': 'jh5-btn-play player-button player-button-play',
        },
        {
            // sep: 16px
            'tag': 'div',
            'class': 'player-button-sep',
        },
        _create_progress_bar(w - 26 * 4 - 16 * 3 - 12 - 61),
        {
            // sep: 16px
            'tag': 'div',
            'class': 'player-button-sep',
        },
        {
            // volumn or mute: 26px
            'tag': 'div',
            'class': 'jh5-btn-volumn player-button player-button-volumn',
        },
        {
            // volumn bar: 61px
            'tag': 'div',
            'class': 'player-volumn-bg',
            'children': [
                {
                    'tag': 'div',
                    'class': 'player-volumn-icon',
                }
            ],
        },
        {
            // space: 12px
            'tag': 'div',
            'class': 'player-button-space',
        },
        {
            // subtitle: 26px
            'tag': 'div',
            'class': 'player-button player-button-cc',
        },
        {
            // sep: 16px
            'tag': 'div',
            'class': 'player-button-sep',
        },
        {
            // fullscreen: 26px
            'tag': 'div',
            'class': 'player-button player-button-fullscreen',
        },
    ];
}

var skin_gray_config = {

    player_style: 'box-shadow: 0px 0px 10px #999',
    background_color: '#666',

    'control_bar': {
        height: 35,
    },

    'create_skin_proxy': function(video) {
        function _update_progress($class) {
            //_log(video.currentTime + ' / ' + video.duration);
            var total = parseInt($class('player-progress').attr('total'));
            var offset = 0;
            var buffered = offset;
            if (! isNaN(video.duration)) {
                offset = total * video.currentTime / video.duration;
                if (video.buffered.length>0) {
                    //_log('buffered: ' + video.buffered.end(0));
                    buffered = total * video.buffered.end(0) / video.duration;
                }
            }
            $class('player-progress-played-bg').css('width', offset + 'px');
            $class('player-progress-icon').css('left', (offset - 4) + 'px');
            $class('player-progress-buffer-bg').css('width', (buffered - offset) + 'px');
        }
        function _update_volume($class) {
            if (video.muted) {
                jhtml5player.log('muted!!!');
                $class('jh5-btn-volumn').addClass('player-button-mute');
                $class('player-volumn-icon').css('left', '0px');
            }
            else {
                var v = video.volume;
                var offset = Math.round(50 * v);
                jhtml5player.log('not muted!!! vol = ' + v + ' offset = ' + offset);
                if (offset < 0) {
                    offset = 0;
                }
                if (offset > 50) {
                    offset = 50;
                }
                $class('jh5-btn-volumn').removeClass('player-button-mute');
                $class('player-volumn-icon').css('left', offset + 'px');
            }
        }
        return {
            'onclick': function($class) {
                if (video.paused) {
                    video.play();
                }
                else {
                    video.pause();
                }
            },
            'onplay': function($class) {
                $class('jh5-btn-play').addClass('player-button-pause');
                $class('jh5-btn-bigplay').hide();
            },
            'onpause': function($class) {
                $class('jh5-btn-play').removeClass('player-button-pause');
                $class('jh5-btn-bigplay').show();
            },
            'onstalled': function($class) {
                jhtml5player.log('stalled');
            },
            'onemptied': function($class) {
                jhtml5player.log('emptied');
            },
            'onseeking': function($class) {
                jhtml5player.log('seeking...');
            },
            'onsuspend': function($class) {
                jhtml5player.log('suspend');
            },
            'onplaying': function($class) {
                jhtml5player.log('playing...');
            },
            'onwaiting': function($class) {
                jhtml5player.log('waiting...');
            },
            'onend': function($class) {
                jhtml5player.log('end');
            },
            'onprogress': function($class) {
                _update_progress($class);
            },
            'ontimeupdate': function($class) {
                _update_progress($class);
            },
            'onmute': function($class) {
                _update_volume($class);
            },
            'onvolumechange': function($class) {
                _update_volume($class);
            },
            'onloadedmetadata': function($class) {
                jhtml5player.log(video.duration);
            },
        };
    },

    'create_big_play_button': function(w, h) {
        return {
            'tag': 'div',
            'class': 'jh5-btn-bigplay player-big-play h5-player-big-play-button',
            'style': {
                'left': (w / 2 - 48) + 'px',
                'top': (h / 2 - 48) + 'px',
            },
        }
    },

    'create_controls': function(w, h) {
        jhtml5player.log('create controls in ' + w + 'x' + h);
        return [
            {
                'tag': 'div',
                'style': {
                    'display': 'block',
                    'float': 'left',
                    'width': '8px',
                    'height': '35px',
                    'background-image': _IMAGE_BAR,
                    'background-position': '0px 0px',
                },
            },
            {
                'tag': 'div',
                'style': {
                    'display': 'block',
                    'float': 'left',
                    'width': (w - 16) + 'px',
                    'height': '35px',
                    'padding-top': '6px',
                    'background-repeat': 'repeat-x',
                    'background-image': 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAjCAIAAADaE/fjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNJREFUeNpi+P79O9OvX7+Y/v37x/T//38wjczGJ4ZMwzCIz8DAAKdBYiCaEBYUFAQIMAAM50TraqTFagAAAABJRU5ErkJggg==)',
                },
                'children': _create_buttons(w-16),
            },
            {
                'tag': 'div',
                'style': {
                    'display': 'block',
                    'float': 'left',
                    'width': '8px',
                    'height': '35px',
                    'background-image': _IMAGE_BAR,
                    'background-position': '-9px 0px',
                }
            }
        ];
    },

    'init': function($class, video) {
        $class('jh5-btn-play').click(function() {
            if (video.paused) {
                video.play();
            }
            else {
                video.pause();
            }
        });
        $class('jh5-btn-pause').click(function() {
            video.pause();
        });
        $class('jh5-btn-bigplay').click(function() {
            video.play();
        });
        $class('jh5-btn-volumn').click(function() {
            video.muted = ! video.muted;
        });
        $class('player-progress').click(function(e) {
            jhtml5player.log('clicked: ' + e.clientX + ' ' + e.pageX + ' ' + $(this).offset().left);
            var total = parseInt($(this).attr('total'));
            var offset = e.pageX - $(this).offset().left - 4;
            jhtml5player.log('total: ' + total + ' offset: ' + offset);
            if (offset < 0) {
                offset = 0;
            }
            if (offset > total) {
                offset = total;
            }
            video.currentTime = video.duration * offset / total;
        });
        $class('player-volumn-bg').click(function(e) {
            jhtml5player.log('clicked: ' + e.clientX + ' ' + e.pageX + ' ' + $(this).offset().left);
            var offset = e.pageX - $(this).offset().left - 5; // 0 to 56
            jhtml5player.log('offset = ' + offset);
            if (offset < 0) {
                offset = 0;
            }
            if (offset > 50) {
                offset = 50;
            }
            var vol = offset / 50;
            jhtml5player.log('vol = ' + vol);
            //$class('player-volumn-icon').css('left', offset + 'px');
            if (vol <= 0.001) {
                // set mute:
                video.volume = 0;
                video.muted = true;
            }
            else {
                video.volume = vol;
                video.muted = false;
            }
            jhtml5player.log('video volumn = ' + video.volume);
        });
    }
};
