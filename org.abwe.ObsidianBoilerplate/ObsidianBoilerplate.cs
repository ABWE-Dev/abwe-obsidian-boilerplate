using org.abwe.ObsidianBoilerplate.ViewModels;
using Rock;
using Rock.Attribute;
using Rock.Blocks;
using Rock.Data;
using Rock.Web.Cache;
using Rock.Web.UI.Controls;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Rock.WebFarm.RockWebFarm;

namespace org.abwe.Blocks.ObsidianBoilerplate
{
    /// <summary>
    /// Displays the details of a particular group.
    /// </summary>
    /// <seealso cref="Rock.Blocks.RockBlockType" />

    [DisplayName("Obsidian Boilerplate")]
    [Category("org_abwe > General")]
    [Description("Sample Obsidian block")]
    [SupportedSiteTypes(Rock.Model.SiteType.Web)]

    #region Block Attributes


    #endregion

    [Rock.SystemGuid.EntityTypeGuid("f756b0c9-9b33-484f-acaf-adea12239d2a")]
    [Rock.SystemGuid.BlockTypeGuid("8b38a717-9276-42f9-9c0d-8173d85c8134")]
    public class ObsidianBoilerplate : RockBlockType
    {
        public override string ObsidianFileUrl => $"/Plugins/org_abwe/ObsidianBoilerplate/Blocks/ObsidianBoilerplate.obs";

        #region Keys

        #endregion Keys

        #region Methods

        /// <inheritdoc/>
        public override object GetObsidianBlockInitialization()
        {
            using (var rockContext = new RockContext())
            {
                var box = new ObsidianBoilerplateBox();

                return box;
            }
        }

        #endregion

        #region Block Actions

        ///// <summary>
        ///// Runs contained in the box.
        ///// </summary>
        ///// <param name="RunLavaBag">Runs the lava that is contained in the bag</param>
        ///// <returns>A string with the processed lava</returns>
        [BlockAction]
        public BlockActionResult RunLava(RunLavaBag runLavaBag)
        {
            try {
                var results = runLavaBag.Lava.ResolveMergeFields(null);
                return ActionOk(results);
            } catch (Exception e) {
                return ActionBadRequest(e.Message);
            }
        }

        #endregion
    }
}
