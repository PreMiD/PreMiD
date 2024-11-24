<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
   {
     avatar: 'https://avatars.githubusercontent.com/u/89056213',
     name: 'Espresso',
     links: [
      { icon: 'x', link: 'https://x.com/JamieNNeedham' },
      { icon: 'discord', link: 'https://discord.com/users/167581994518052864' }
     ]
   },
   {
     avatar: 'https://gravatar.com/avatar/65eab64237c97de3b9daec297193780c',
     name: 'veryCrunchy',
     links: [
      { icon: 'github', link: 'https://github.com/veryCrunchy' },
      { icon: 'discord', link: 'https://discord.com/users/576097150359044106' }
     ]
   },
]
</script>

# General Troubleshooting

### Prerequisites

- PreMiD should be installled at this point.
- You should confirm you are logged into Discord via PreMiD.
- You should have Activity Privacy > Detected Activities turned on in your Discord settings.

> [!TIP] 
> If you have _not_ attempted to restart your web browser before starting this guide, you should begin by doing so. Most of the steps contained in this guide will begin with this step.

---

Troubleshooting Guides brought to you by
<VPTeamMembers size="small" :members="members" />
