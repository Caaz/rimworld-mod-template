using HugsLib;

namespace MyMod
{
    public class Mod : ModBase
    {
        public override void DefsLoaded()
        {
            Logger.Message("Hello, World!");
        }
    }
}
