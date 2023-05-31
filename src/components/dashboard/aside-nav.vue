<template>
  <aside id="aside-nav">
    <div class="primary-nav" ref="primary">
      <div v-for="(group, i) in primary" class="group-container"
           :class="{last: primary.length === i + 1}"
           :ref="group.name">
        <ul class="p">
          <li class="p-li" v-for="route in group.routes" ref="items">
            <router-link :tag="route.routeName? 'a' : 'div'" :to="{name: route.routeName || 'dashboard'}"
                         class="nav-btn" :key="route.name">
              <div class="parent-nav">
                <div class="icon">
                  <svg>
                    <use :href="`#${route.icon}`"></use>
                  </svg>
                </div>
                <div class="name">{{ route.name }}</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="group-container note-cnt">
        <ul class="p">
        </ul>
      </div>
    </div>
    <span class="hover" ref="hover"/>
  </aside>
</template>

<script>
export default {
  name: 'aside-nav',
  data() {
    return {
      primary: [
        {
          name: 'horses',
          routes: [
            {icon: 'horse', name: 'Horses', routeName: 'horses'}
          ]
        },
        {
          name: 'extensions',
          routes: []
        }
      ],
      secondary: [
      ]
    };
  },
  mounted() {
    this.$refs.items.forEach(item => {
      item.onmouseover = this.handleMouseEnter;
      item.onmouseleave = this.handleMouseLeave;
    });
  },
  methods: {
    handleMouseEnter(ev) {
      const el = ev.srcElement;
      const bound = el.getBoundingClientRect();
      this.$refs.hover.style.opacity = `1`;
      this.$refs.hover.style.top = `${bound.top - 60}px`;
      this.$refs.hover.style.height = `${bound.height}px`;
    },
    handleMouseLeave() {
      this.$refs.hover.style.opacity = '0';
    }
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/_variables.scss";

aside#aside-nav {
  padding: 1rem 0;
  position: relative;

  .primary-nav, .secondary-nav {
    padding: 0 10px;
    position: relative;

    li.p-li {
      .child-nav {
        padding-left: 40px;
        max-height: 0;
        opacity: 0;
        display: none;
        visibility: hidden;
        pointer-events: none;

        ul.c {
          margin-top: .1em;
          margin-bottom: .2em;
        }

        li.c-li {
          padding-top: .4em;
          margin-bottom: .26em;

          a {
            font-size: .99em;
          }
        }
      }

      a.nav-btn, .nav-btn {
        display: block;
        padding: 7px 10px;

        .parent-nav {
          display: flex;
          align-items: center;
          pointer-events: none;

          .icon {
            height: 18px;
            width: 18px;
            min-width: 18px;
            padding: .06em 0;
            //border-radius: 2px;
            margin-right: 1.25rem;
            color: rgba(0, 0, 0, 0.4);
            background-color: rgba(212, 212, 212, 0.4);

            svg {
              max-height: 100%;
              max-width: 100%;
            }
          }

          .name {
            text-transform: capitalize;
            font-size: .75rem;
            font-weight: 600;
          }
        }


        &.router-link-active + .child-nav {
          max-height: unset;
          opacity: 1;
          pointer-events: all;
        }
      }

      &.note {

        a.nav-btn, .nav-btn {
          padding: .8rem 10px;
          background-color: #ED835925;
        }

        .parent-nav {
          align-items: flex-start;
          pointer-events: auto;
        }

        .details {
          width: 75%;

          .name {
            margin-top: .2em;
          }

          .progress-cnt {
            margin-top: 1rem;

            .bar {
              height: 4px;
              width: 100%;
              background-color: #D9D9D9;
              position: relative;
              --w: 0%;
              margin-bottom: .5em;

              &:after {
                top: 0;
                left: 0;
                content: "";
                height: 100%;
                width: var(--w);
                position: absolute;
                background-color: #EE845C;
              }
            }

            .desc {
              color: rgba(52, 52, 52, 0.71);
              font-weight: 600;
            }
          }

          .action {
            cursor: pointer;
            margin: 1rem 0 .4rem;
            text-transform: uppercase;
            color: #217CE8;
          }
        }
      }
    }
  }

  .primary-nav {
    .group-container {
      margin-bottom: 1em;

      &.note-cnt {
        border-bottom: 0;
        margin-top: 2rem;
      }

      .p {
        max-height: unset;
        opacity: 1;
        margin: .3rem 0 .9rem;
        visibility: visible;
        pointer-events: all;
        padding-bottom: .2em;
      }

      &.last {
        border-bottom: none;
      }

    }
  }

  .secondary-nav {
    position: absolute;
    padding-bottom: 1.4rem;
    width: 100%;
    bottom: 0;

    .all-orgs {
      width: 100%;
      display: flex;
      align-items: center;
      background-color: #F1F1F1;
      padding: 7px 10px;
      font-size: .75rem;
      line-height: 1;
      font-weight: 600;

      .icon {
        height: 19px;
        width: 19px;
        margin-right: 1em;
        color: #4b4b4b;
      }
    }
  }

  span.hover {
    position: absolute;
    backface-visibility: hidden;
    left: 10px;
    width: calc(#{$aside-width} - 20px);
    z-index: -1;
  }
}
</style>
